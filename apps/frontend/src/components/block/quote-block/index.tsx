import React, { useEffect } from "react";
import type * as GraphQL from "@gql/graphql";
import Image from "next/image";
import { gql } from "@apollo/client";
import { CmsComponent } from "@remkoj/optimizely-dxp-react";

/**
 * React functional component for rendering a quote block with user information.
 *
 * @param {QuoteBlockProps} user - the user object with profile information
 * @param {string} quote - the quote to be displayed
 * @param {string} color - the color theme of the block
 * @param {boolean} active - whether the block is active or not
 * @return {JSX.Element} the rendered quote block component
 */
const QuoteBlock: CmsComponent<GraphQL.QuoteBlockDataFragment> = ({
  data,
  inEditMode,
}) => {
  const { profilePicture, name, location, quote, color, active } = data;
  const additionalClasses: string[] = [];

  if (active) {
    additionalClasses.push(
      "relative before:translate-x-[16px] before:translate-y-[16px]"
    );
  }

  switch (color) {
    case "blue":
      additionalClasses.push("bg-vulcan text-white");
      break;
    case "orange":
      additionalClasses.push("bg-tangy text-vulcan");
      break;
    case "green":
      additionalClasses.push("bg-verdansk text-vulcan");
      break;
    case "red":
      additionalClasses.push("bg-paleruby text-white");
      break;
    case "white":
      additionalClasses.push("bg-white text-vulcan");
      break;
  }

  return (
    <figure
      className={`p-8 lg:p-24 flex flex-col rounded-[40px] relative transition-all duration-300 before:content-[''] before:z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-azure before:rounded-[40px] before:transition-all before:duration-300 before:ease-in-out ${additionalClasses.join(
        " "
      )}`}
    >
      <blockquote className="text-[18px] lg:text-[24px]">{quote}</blockquote>
      <figcaption className="flex items-center mt-16">
        {profilePicture && profilePicture.url && (
          <Image
            src={profilePicture.url}
            alt={name}
            width={200}
            height={200}
            className="rounded-full max-w-24"
          />
        )}

        <cite className="ml-4 lg:flex not-italic">
          <p className="whitespace-nowrap">{name}</p>
          {location && (
            <span className="mx-2 hidden lg:inline-block">&mdash;</span>
          )}
          {location ? (
            <p className="text-[12px] lg:text-[16px]">{location}</p>
          ) : null}
        </cite>
      </figcaption>
    </figure>
  );
};

QuoteBlock.displayName = "Quote Block";
QuoteBlock.getDataFragment = () => ["QuoteBlockData", QuoteBlockData.data];
export default QuoteBlock;

const QuoteBlockData: Readonly<{ [field: string]: any }> = {
  data: gql(/* GraphQL */ `
    fragment QuoteBlockData on QuoteBlock {
      quote: QuoteText
      color: QuoteColor
      active: QuoteActive
      name: QuoteProfileName
      profilePicture: QuoteProfilePicture {
        url: Url
      }
      location: QuoteProfileLocation
    }
  `),
};
