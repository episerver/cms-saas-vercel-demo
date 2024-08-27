import { Utils, type RichTextNode, type StringNode, type NodeInput } from "@remkoj/optimizely-cms-react/components"

function isRichTextNode(toTest: any) : toTest is RichTextNode
{
    return Utils.isTypedNode(toTest) && toTest.type == 'richText'
}

function isStringNode(toTest: any) : toTest is StringNode
{
    return Utils.isTypedNode(toTest) && toTest.type == 'string'
}

export function isNodeInput(toTest: any) : toTest is NodeInput
{
    return isRichTextNode(toTest) || isStringNode(toTest)
}

export function isNonEmptyString(toTest: any) : toTest is string
{
    return typeof(toTest) == 'string' && toTest.length > 0
}