import "server-only";
import { createEditPageComponent } from "@remkoj/optimizely-cms-nextjs/preview";
import { factory } from "@/components/factory";
import { createAuthorizedClient } from "@remkoj/optimizely-cms-nextjs/rsc";
import { getContentById as loader } from "@gql/functions";

export default createEditPageComponent(factory, {
  loader,
  clientFactory: (token?: string) => createAuthorizedClient(token),
  contentResolver: ({ searchParams: { preview_token: token, ctx, key, ver: version, loc: locale } }) => {
  
    if (key) {
      return {
        token,
        ctx,
        key,
        locale: version ? undefined : locale,
        version,
        path: null
      }
    }
    return undefined;
  },
  //refreshTimeout: 500, // Enable this line when you have issues with the preview not updating at all
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";
