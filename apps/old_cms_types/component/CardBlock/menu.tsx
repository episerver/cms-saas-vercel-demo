import "server-only";
import { RichText, getServerContext, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { type CardBlockDataFragment, CardBlockDataFragmentDoc} from "@gql/graphql";

import Link from "@components/shared/cms_link"
import Image from "@components/shared/cms_image"

export const CardBlockMenuComponent: CmsComponent<CardBlockDataFragment> = ({
    data: {
        cardHeading: heading,
        cardDescription: description,
        cardButton: button,
        cardImage: image
    }
}) =>
{
    const { factory } = getServerContext()
    const {
        url: link,
        children: linkText
    } = button ?? {}

    return <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-[1rem] p-8 dark:bg-vulcan-85">
        <div className="prose">
            {heading && <h3 className="mb-4 leading-[1.5]">{heading}</h3>}
            {description && <RichText text={ description?.json } className="leading-[1.5]" factory={factory} />}
            {link && (
            <Link className="link--arrow dark:text-white dark:brightness-0	dark:invert" href={{ text: linkText, url: link }} />
            )}
        </div>
        <div className="order-first lg:order-none">
            {image && (
            <Image
                className="w-full rounded-[1rem]"
                src={image}
                alt={""}
                width={207}
                height={232}
            />
            )}
        </div>
    </article>
}
CardBlockMenuComponent.getDataFragment = () => ["CardBlockData", CardBlockDataFragmentDoc];
CardBlockMenuComponent.displayName = "Card Block (Menu)";

export default CardBlockMenuComponent