import { useMemo } from 'react'
import Image from "next/image";
import ButtonBlock from "../button-block";
import { useFragment } from "@gql";
import { HeroBlockDataFragmentDoc, ReferenceDataFragmentDoc, LinkDataFragmentDoc, type HeroBlockDataFragment} from '@gql/graphql'
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";

const HeroBlock: CmsComponent<HeroBlockDataFragment> = ({
  data: {
    heroImage: image,
    eyebrow = "",
    heroHeading: heading = "",
    heroDescription: description = { html: "", structure: "{}"},
    heroColor: color = "blue",
    heroButton: button
  }
}) => {
  const { inEditMode } = getServerContext()
  const heroImage = useFragment(ReferenceDataFragmentDoc, image)
  const heroImageLink = useFragment(LinkDataFragmentDoc, heroImage?.url)
  const heroImageSrc = new URL(heroImageLink?.default ?? '/', heroImageLink?.base ?? 'https://example.com').href
  const hasImage = heroImageLink != null && heroImageLink != undefined

  // Determine the classes based upon color and button being available
  const [additionalClasses, innerClasses, buttonClassName] = useMemo<[Array<string>,Array<string>, string]>(() => {
    const _additionalClasses: string[] = [];
    const _innerClasses: string[] = [];
    let _buttonClassName = "";
    switch (color) {
      case "dark-blue":
        _additionalClasses.push("bg-vulcan dark:bg-transparent");
        _innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
        if (button) {
          _buttonClassName = "btn--light";
        }
        break;
      case "blue":
        _additionalClasses.push("bg-azure dark:bg-transparent");
        _innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
        if (button) {
          _buttonClassName = "btn--light";
        }
        break;
      case "orange":
        _additionalClasses.push("bg-tangy dark:bg-transparent");
        _innerClasses.push(
          "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
        );
        if (button) {
          _buttonClassName = "btn--dark ";
        }
        break;
      case "green":
        _additionalClasses.push("bg-verdansk dark:bg-transparent");
        _innerClasses.push(
          "text-vulcan prose-h3:text-vulcan prose-h2:text-vulcan"
        );
        if (button) {
          _buttonClassName = "btn--dark";
        }
        break;
      case "red":
        _additionalClasses.push("bg-paleruby dark:bg-transparent");
        _innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
        if (button) {
          _buttonClassName = "btn--light";
        }
        break;
      case "purple":
        _additionalClasses.push("bg-people-eater dark:bg-transparent");
        _innerClasses.push("text-white prose-h3:text-white prose-h2:text-white");
        if (button) {
          _buttonClassName = "btn--light";
        }
        break;
    }
    return [ _additionalClasses, _innerClasses, _buttonClassName ]
  }, [ color, button ])

  return (
    <section
      className={`outer-padding py-32 lg:py-64 ${additionalClasses.join(" ")}`}
    >
      <div className={`w-full @container/card container mx-auto`}>
        <div
          className={`w-full h-full grid items-center grid-cols-1 ${
            hasImage
              ? "gap-16 @[80rem]/card:grid-cols-12 @[80rem]/card:gap-32"
              : ""
          }`}
        >
          <div
            className={`prose lg:prose-h1:text-[72px] lg:prose-h1:my-[48px] prose-h1:font-bold prose-p:text-[24px] prose-p:leading-[30px] prose-img:my-4 ${
              hasImage ? "@[80rem]/card:col-span-6" : "max-w-[900px] mx-auto"
            } ${innerClasses.join(" ")}`}
          >
            {eyebrow ? (
              <p
                className="eyebrow"
                data-epi-edit={inEditMode ? "Eyebrow" : undefined}
                dangerouslySetInnerHTML={{ __html: eyebrow }}
              ></p>
            ) : inEditMode && !eyebrow ? (
              <div className="mt-16 flex justify-end">
                <div data-epi-edit={inEditMode ? "Eyebrow" : undefined}>
                  + Add Eyebrow
                </div>
              </div>
            ) : null}
            {heading ? (
              <h1
                data-epi-edit={inEditMode ? "Heading" : undefined}
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h1>
            ) : inEditMode && !heading ? (
              <div className="mt-16 flex justify-end">
                <div data-epi-edit={inEditMode ? "Heading" : undefined}>
                  + Add Heading
                </div>
              </div>
            ) : null}
            {description?.html ? (
              <div
                data-epi-edit={inEditMode ? "Description" : undefined}
                dangerouslySetInnerHTML={{ __html: description?.html ?? "" }}
              ></div>
            ) : inEditMode && !description?.html ? (
              <div className="mt-16 flex justify-end">
                <div data-epi-edit={inEditMode ? "Description" : undefined}>
                  + Add Description
                </div>
              </div>
            ) : null}
            {button && button.children ? (
              <ButtonBlock
                data-epi-edit={inEditMode ? "HeroButton" : undefined}
                {...button}
                className={buttonClassName}
              ></ButtonBlock>
            ) : inEditMode && !(button && button.children) ? (
              <div className="mt-16 flex justify-end">
                <ButtonBlock
                  buttonType={"secondary"}
                  buttonVariant={"cta"}
                  data-epi-edit={inEditMode ? "HeroButton" : undefined}
                >
                  + Add Button
                </ButtonBlock>
              </div>
            ) : null}
          </div>
          {hasImage ? (
            <div
              className={`@[80rem]/card:col-span-6 order-first lg:order-last`}
            >
              <Image
                data-epi-edit={inEditMode ? "HeroImage" : undefined}
                className="rounded-[40px] w-full"
                src={ heroImageSrc }
                alt={""}
                width={600}
                height={500}
              />
            </div>
          ) : inEditMode && !( hasImage ) ? (
            <div className="mt-16 flex justify-end">
              <ButtonBlock
                buttonType={"primary"}
                buttonVariant={"cta"}
                data-epi-edit={inEditMode ? "HeroImage" : undefined}
              >
                + Add Image
              </ButtonBlock>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

HeroBlock.displayName = "Hero Block";
HeroBlock.getDataFragment = () => ["HeroBlockData", HeroBlockDataFragmentDoc];
export default HeroBlock;