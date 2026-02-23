import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ParagraphElementDataFragmentDoc, type ParagraphElementDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText, extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { factory as defaultFactory } from "@/components/factory";
import { DefaultParagraphProps } from "./displayTemplates";
import { EditableParagraph } from "./_editable";

enum AlignClasses {
    left = " mr-auto ml-0",
    center = " mx-auto",
    right = " ml-auto mr-0"
}

// Helper to extract plain text from rich text JSON (Slate/ProseMirror format)
function extractPlainText(json: unknown): string {
    if (!json) return '';

    // If json is already a string, return it
    if (typeof json === 'string') return json;

    // If it's not an object, return empty
    if (typeof json !== 'object') return '';

    try {
        const traverse = (node: unknown): string => {
            if (!node) return '';

            // If node is a string, return it directly
            if (typeof node === 'string') return node;

            // If node is not an object, skip
            if (typeof node !== 'object') return '';

            // Handle arrays (top-level content or children)
            if (Array.isArray(node)) {
                return node.map(traverse).join('');
            }

            const obj = node as Record<string, unknown>;

            // Slate format: { text: "..." } for leaf nodes
            if (typeof obj.text === 'string') return obj.text;

            // Recursively process children
            if (Array.isArray(obj.children)) {
                return obj.children.map(traverse).join('');
            }

            // ProseMirror format: { content: [...] }
            if (Array.isArray(obj.content)) {
                return obj.content.map(traverse).join('');
            }

            return '';
        };
        return traverse(json);
    } catch (e) {
        console.error('extractPlainText error:', e);
        return '';
    }
}

/**
 * Paragraph
 *
 */
export const ParagraphElementElement : CmsComponent<ParagraphElementDataFragment, DefaultParagraphProps> = ({ data: { text }, contentLink, layoutProps, ctx }) => {
    const { factory } = ctx || { factory: defaultFactory }
    const {
        placement = "left",
        transform = "default"
    } = extractSettings(layoutProps)

    const width = transform == "full" ? ' max-w-none' : ''
    const align = AlignClasses[placement]

    // Try to extract plain text from JSON, fall back to stripping HTML tags
    let plainText = extractPlainText(text?.json);
    if (!plainText && text?.html) {
        // Strip HTML tags from the html field
        plainText = text.html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    }

    return (
        <EditableParagraph contentKey={contentLink.key ?? null} textContent={plainText}>
            <CmsEditable as={RichText} ctx={ ctx } cmsFieldName="text" text={ text?.json } forwardCtx="ctx" cmsId={ contentLink.key } className={`rich-text prose${ width }${ align }`}/>
        </EditableParagraph>
    );
}
ParagraphElementElement.displayName = "Paragraph (Element/ParagraphElement)"
ParagraphElementElement.getDataFragment = () => ['ParagraphElementData', ParagraphElementDataFragmentDoc]

export default ParagraphElementElement
