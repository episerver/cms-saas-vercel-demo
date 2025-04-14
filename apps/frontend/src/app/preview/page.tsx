import "server-only";
import { createEditPageComponent } from "@remkoj/optimizely-cms-nextjs/preview";
import { getContentById } from "@gql/functions";
import { setupFactory } from "@components/factory";
import { createClient } from "@remkoj/optimizely-graph-client";

export default createEditPageComponent(setupFactory(), {
  loader: getContentById,
  clientFactory: (token?: string) => createClient(undefined, token, {
    nextJsFetchDirectives: true,
    cache: false,
    queryCache: false,
  }),
  refreshTimeout: 500, // Enable this line when you have issues with the preview not updating at all
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";
