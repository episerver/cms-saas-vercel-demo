import React from "react";
import { type QuoteBlockDataFragment, QuoteBlockDataFragmentDoc} from "@gql/graphql";
import Image from "next/image";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { refToURL } from "@/lib/conversions"
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

const CardColors = {
  blue: "on-vulcan",
  orange: "on-tangy",
  green: "on-verdansk",
  red: "on-paleruby",
  white: "on-white"
}

/**
 * React functional component for rendering a quote block with user information.
 *
 * @param {QuoteBlockProps} user - the user object with profile information
 * @param {string} quote - the quote to be displayed
 * @param {string} color - the color theme of the block
 * @param {boolean} active - whether the block is active or not
 * @return {JSX.Element} the rendered quote block component
 */
const QuoteBlock: CmsComponent<QuoteBlockDataFragment> = ({
  data: { profilePicture, name, location, quote, color, active },
}) => {
  const additionalClasses: string[] = [CardColors[color || "white"]];

  if (active) {
    additionalClasses.push(
      "relative before:translate-x-[16px] before:translate-y-[16px]"
    );
  }

  const profileUrl = refToURL(profilePicture)

  return (
    <figure
      className={`p-4 lg:p-12 flex flex-col rounded-[40px] relative transition-all duration-300 before:content-[''] before:z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-azure before:rounded-[40px] before:transition-all before:duration-300 before:ease-in-out ${additionalClasses.join(
        " "
      )}`}
    >
      <CmsEditable as="blockquote" cmsFieldName="QuoteText" className="text-lg">
        {quote}
      </CmsEditable>
      <figcaption className="flex items-center mt-8">
        {profileUrl && (
          <CmsEditable 
            as={Image}
            cmsFieldName="QuoteProfilePicture"
            src={ profileUrl.href }
            alt={name ?? ""}
            width={200}
            height={200}
            className="rounded-full max-w-12 mr-4"
          />
        )}

        <cite className="lg:flex not-italic">
          <CmsEditable as="p" cmsFieldName="QuoteProfileName" className="whitespace-nowrap">{name}</CmsEditable>
          {location && <>
            <span className="mx-2 hidden lg:inline-block">&mdash;</span>
            <CmsEditable cmsFieldName="QuoteProfileLocation" className="text-xs mt-1">
              {location}
            </CmsEditable>
          </>}
        </cite>
      </figcaption>
    </figure>
  );
};

QuoteBlock.displayName = "Quote Block";
QuoteBlock.getDataFragment = () => ["QuoteBlockData", QuoteBlockDataFragmentDoc];
export default QuoteBlock;
