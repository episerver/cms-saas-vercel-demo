import "server-only";
//@ts-expect-error We're enforcing that we're running on Node.JS, but typescript doesn't understand
import crypto from "node:crypto";
import React from "react";
import { notFound } from "next/navigation";

import { createClient, AuthMode } from "@remkoj/optimizely-graph-client";
import { ServerContext, CmsContent } from "@remkoj/optimizely-cms-react/rsc";

import { type Locales } from "../../../../../gql/graphql";
import { getContentById } from "../../../../../gql/functions";
import { factory } from "../../../../components/factory";

type MySearchParams = {
  key?: string | string[];
  loc?: string | string[];
  ver?: string | string[];
  psk?: string | string[];
  auth?: string | string[];
};

type ParsedParams = {
  [K in keyof MySearchParams]-?: string | null;
};

function resolveParams(input: MySearchParams): Readonly<ParsedParams> {
  const val: ParsedParams = {
    key: null,
    loc: null,
    ver: null,
    psk: null,
    auth: null,
  };

  (["key", "loc", "ver", "psk", "auth"] as Array<keyof MySearchParams>).forEach(
    (x) => {
      if (typeof input[x] == "string" && input[x].length > 0) val[x] = input[x];
    },
  );

  return val;
}

function calculateAuth(
  inputs: Readonly<ParsedParams>,
  psk: string,
): Readonly<string> {
  const searchParams = new URLSearchParams();
  for (const k in inputs) {
    if (k != "auth" && k != "psk") searchParams.set(k, inputs[k]);
  }

  const data = searchParams.toString() + "::" + psk;

  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("base64url");
}

const PreviewPage = async ({
  searchParams,
}: {
  searchParams: MySearchParams;
}) => {
  console.log("Preview endpoint", searchParams);
  const client = createClient(undefined, undefined, {
    nextJsFetchDirectives: true,
    cache: false,
    queryCache: false,
  });

  // Parse request
  const requestData = resolveParams(searchParams);

  // Create context
  const ctx = new ServerContext({
    factory,
    client,
    mode: "preview",
    locale: requestData.loc ?? "en",
  });

  // Validate the PSK
  const psk = ctx.client?.siteInfo.publishToken;
  if (!psk || psk.length < 1) {
    console.error("No Pre-Shared key configured");
    notFound();
  }

  const expectedAuth = calculateAuth(requestData, psk);
  console.log(
    `Request auth: ${requestData.auth} -- Expected auth: ${expectedAuth}`,
  );

  if (psk != requestData.psk) {
    console.error("Invalid PSK provided");
    notFound();
  }

  // Load the content referenced
  if (!requestData.key) {
    console.error("No Content-Key provided");
    notFound();
  }
  ctx.client.updateAuthentication(AuthMode.HMAC);
  const content = await getContentById(ctx.client, {
    key: requestData.key,
    version: requestData.ver,
    locale: requestData.loc as Locales | null,
  });

  // Validate that we have data
  if (
    typeof content?.content?.total != "number" ||
    content?.content?.total != 1
  ) {
    console.error("Needed exactly one version, got ", content?.content?.total);
    notFound();
  }
  const contentData = Array.isArray(content?.content?.items)
    ? content?.content?.items.at(0)
    : content?.content?.items;

  // Render CMS Content
  return (
    <CmsContent
      contentLink={{
        key: requestData.key,
        locale: requestData.loc,
        version: requestData.ver,
      }}
      fragmentData={contentData || undefined}
      ctx={ctx}
    />
  );
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";

export default PreviewPage;
