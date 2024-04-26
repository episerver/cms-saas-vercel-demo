import "server-only";

import type { OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";

export const ContainerPage = ({
  contentLink,
  data,
  children,
  client,
  inEditMode,
}) => {
  return <>This should never be seen!</>;
};

export default ContainerPage;
