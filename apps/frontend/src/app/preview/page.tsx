import "server-only";
import { OnPageEdit, createAuthorizedClient } from "@remkoj/optimizely-cms-nextjs";
import { getContentById } from "@gql/functions";
import { setupFactory } from "@components/factory";

export default OnPageEdit.createEditPageComponent(setupFactory(), {
    loader: getContentById,
    clientFactory: createAuthorizedClient
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs"