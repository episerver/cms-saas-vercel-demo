import { type FunctionComponent, type ComponentProps } from "react";
import NextJsImage from "next/image";

type ContentReference = {
  __typename?: "ContentReference";
  item?: {
    __typename?: string | null;
    Url?: string | null;
    Title?: string | null;
    Width?: number | null;
    Height?: number | null;
  } | null;
  key?: string | null;
  url?: {
    base?: string | null;
    default?: string | null;
    type?: string | null;
  } | null;
};

const cmpAssetType = "cmp_PublicImageAsset";

export function getAssetUrl(
  reference?: ContentReference | null
): string | undefined {
  if (!reference) return undefined;
  if (reference.item?.__typename === cmpAssetType && reference.item?.Url)
    return reference.item.Url;
  if (reference.url?.default)
    return new URL(reference.url.default, reference.url.base ?? undefined).href;
  return undefined;
}

export function getAssetAltText(
  reference?: ContentReference | null
): string | undefined {
  if (!reference) return undefined;
  if (reference.item?.__typename === cmpAssetType && reference.item?.Title)
    return reference.item.Title;
  return undefined;
}

export function getAssetDimensions(
  reference?: ContentReference | null
): { width?: number; height?: number } | undefined {
  if (!reference) return undefined;
  if (
    reference.item?.__typename === cmpAssetType &&
    (reference.item?.Width || reference.item?.Height)
  )
    return {
      width: reference.item?.Width ?? undefined,
      height: reference.item?.Height ?? undefined,
    };
  return undefined;
}

export type ImageProps = Omit<ComponentProps<typeof NextJsImage>, "src"> & {
  src?: ContentReference | null;
  fallbackSrc?: ComponentProps<typeof NextJsImage>["src"];
};

export const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  fallbackSrc,
  ...imgProps
}) => {
  const imageUrl = getAssetUrl(src) ?? fallbackSrc;
  const imageAlt = getAssetAltText(src) ?? alt;
  if (!imageUrl) return null;
  return <NextJsImage src={imageUrl} alt={imageAlt} {...imgProps} />;
};

export default Image;
