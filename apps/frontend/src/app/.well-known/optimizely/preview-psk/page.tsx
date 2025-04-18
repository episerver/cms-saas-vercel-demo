/**
 * This page is intended to allow external systems to generate previews of any content item
 * stored within the CMS. With this capability, any system that uses the CMS Rest API may
 * use this page to preview the content just pushed into the CMS. For example, Omni-Channel
 * publishing from CMP.
 * 
 * To ensure adequate security, it requires the user of this service to sign the request using
 * the publishToken. This ensures (a) that the publishToken is known on both ends but is not 
 * included in the request and (b) that the key, version & locale parameters haven't been changed.
 * 
 * @see: https://docs.developers.optimizely.com/content-marketing-platform/docs/get-started-with-omnichannel-content
 */

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
  auth?: string | string[];
};

type ParsedParams = {
  [K in keyof MySearchParams]-?: string | null;
};

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

  // Validate the authorization hash
  const expectedAuth = calculateAuth(requestData, psk);
  if (requestData.auth != expectedAuth) {
    console.error(`Authorization signatures do not match! Expected "${ expectedAuth}", received "${ requestData.auth }".`);
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


function resolveParams(input: MySearchParams): Readonly<ParsedParams> {
  const val: ParsedParams = {
    key: null,
    loc: null,
    ver: null,
    auth: null,
  };

  (["key", "loc", "ver", "auth"] as Array<keyof MySearchParams>).forEach(
    (x) => {
      if (typeof input[x] == "string" && input[x].length > 0) val[x] = input[x];
    },
  );

  return val;
}

/**
 * Calculate the expected authentication value
 * 
 * @param     inputs    The received inputs
 * @param     psk       The pre-shared key
 * @returns   The authorization signature
 */
function calculateAuth(
  inputs: Readonly<ParsedParams>,
  psk: string,
  inputEncoding?: string
): Readonly<string> {
  const searchParams = new URLSearchParams();
  searchParams.set('key', inputs.key ?? '');
  searchParams.set('ver', inputs.ver ?? '');
  searchParams.set('loc', inputs.loc ?? '');
  const data = searchParams.toString();
  const hash = crypto.createHmac("sha256", psk);
  hash.update(data, inputEncoding);
  return hash.digest("base64url");
}