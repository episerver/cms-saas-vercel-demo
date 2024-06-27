import "server-only";

// Base frameworks & components
import { type PropsWithChildren } from "react";
import { OnPageEdit } from "@remkoj/optimizely-cms-nextjs";

// Import libraries & GraphQL
import { getContentById } from "@gql";

// Import components & factory
import { setupFactory } from "@components/factory";
import RefreshNotice from "@components/refresh-notice";

// Prepare the Edit Mode Layout for page type components
const PageLayout = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default OnPageEdit.createEditPageComponent(setupFactory(), {
  refreshNotice: RefreshNotice,
  layout: PageLayout,

  // Casting is needed due to the locale being an enum in the generated types and a string in the generic query used by the loader
  loader: getContentById as OnPageEdit.Types.GetContentByIdMethod,
});

export const fetchCache = "force-no-store";
export const revalidate = 0;
