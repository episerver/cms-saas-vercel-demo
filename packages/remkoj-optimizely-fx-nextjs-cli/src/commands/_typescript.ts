import ts from 'typescript'
import fs from 'node:fs'

export type FlagDefs = { 
    [name: string]: {
        key: string
        varName?: string
        name: string
        description: string
        variable_definitions: { 
            [name: string]: {
                key: string,
                type: string, 
                mandatory: boolean, 
                description: string ,
                default_value: string
            }
        }
    }
}

export class FlagsTypeScriptFile {
    protected _cwd: string
    protected _filename : string
    protected _configFile : string
    protected _sources ?: ts.SourceFile | undefined

    public get sourceFile() : ts.SourceFile
    {
        if (!this._sources)
            this._sources = ts.createSourceFile(this._filename, fs.readFileSync(this._filename).toString(), ts.ScriptTarget.ES2015, true)
        return this._sources
    }

    constructor(filename: string, cwd?: string) {
        this._filename = filename
        if (!fs.existsSync(this._filename))
            throw new Error(`Could not find '${ this._filename }'.`);

        this._cwd = cwd ?? process.cwd()
        this._configFile = ts.findConfigFile(
            cwd,
            ts.sys.fileExists,
            "tsconfig.json"
        );
        if (!this._configFile) {
            throw new Error("Could not find a valid 'tsconfig.json'.");
        }
    }

    protected isVercelFlag(declarationNode: ts.Node) : declarationNode is ts.CallExpression {
        return ts.isCallExpression(declarationNode) && declarationNode.expression.getText() == 'flag' && declarationNode.typeArguments.length == 1
    }

    protected isOptimizelyFlag(vercelFlagNode: ts.Node): vercelFlagNode is ts.TypeReferenceNode {
        return ts.isTypeReferenceNode(vercelFlagNode) && vercelFlagNode.typeName.getText() == 'OptimizelyFlag'
    }

    protected getJsDocTags(node: ts.Node & { jsDoc?: ts.Node[] }) : ReadonlyArray<ts.JSDocTag> | undefined
    {
        const tags : Array<ts.JSDocTag> | undefined = node.jsDoc?.flatMap(x => ts.isJSDoc(x) ? x.tags ?? [] : [])
        return !tags || tags.length == 0 ? undefined : tags
    }
    protected getJsDocText(node: ts.Node & { jsDoc?: ts.Node[] }) : ReadonlyArray<string> | undefined
    {
        const texts : Array<string> | undefined = node.jsDoc?.flatMap(x => ts.isJSDoc(x) ? this.isArray<ts.JSDocComment>(x.comment) ? this.jsDocCommentsToStrings(x.comment) : [(x.comment ?? '')] : [])
        return !texts || texts.length == 0 ? undefined : texts.flatMap(x => x.split("\n")).filter(x=>x)
    }

    protected isArray<T extends ts.Node>(toTest: any) : toTest is ReadonlyArray<T>
    {
        return Array.isArray(toTest)
    }

    protected jsDocCommentsToStrings(dc: ReadonlyArray<ts.JSDocComment>) : string[]
    {
        return dc.map(x => x.text.toString())
    }

    protected extractOptimizelyFlagType(declarationNode: ts.Node) : ts.TypeLiteralNode
    {
        if (!this.isVercelFlag(declarationNode))
            return undefined
        const flagType = declarationNode.typeArguments.at(0)
        if (!this.isOptimizelyFlag(flagType))
            return undefined
        const flagTypeDef = flagType.typeArguments?.at(0)
        return ts.isTypeLiteralNode(flagTypeDef) ? flagTypeDef : undefined
    }

    public getExportedFlags() : FlagDefs 
    {
        return this._getExportedFlags(this.sourceFile, {})
    }

    protected _getExportedFlags(node: ts.Node, flags: FlagDefs = {}) {
        const parent = node.parent;
        if (node.kind == ts.SyntaxKind.ExportKeyword && ts.isVariableStatement(parent))
        {
            parent.declarationList.declarations.forEach(declaration => {
                const flagVarName = declaration.name.getText();
                const flagKey = this.getJsDocTags(parent)?.filter(x => x.tagName.getText() == 'key').at(0)?.comment
                const flagName = !flagKey ? flagVarName : (typeof(flagKey) == 'string' ? flagKey : flagKey.map(x => x.getFullText()).join(" "))
                const flagTypeDef = declaration.forEachChild(declarationNode => {
                    return this.extractOptimizelyFlagType(declarationNode)
                })
                if (!flagTypeDef) {
                    console.log(`  ⚠ The export ${ flagName } is not an Optimizely FX Feature Flag, ignoring...`)
                    return
                }
                const doc = this.getJsDocText(parent)
                const split = doc.findIndex(x => x.startsWith('-'))
                const flagDisplayName = doc.slice(0, split === -1 ? undefined : split).join(" ")
                const flagDescription = split === -1 ? "" : doc.slice(split+1).join("\n")
                flags[flagName] = {
                    ...flags[flagName],
                    varName: flagVarName,
                    key: flagName,
                    name: flagDisplayName,
                    description: flagDescription
                }
                flags[flagName].variable_definitions = flags[flagName].variable_definitions || {}
                flagTypeDef.members.forEach(member => {
                    const variableName = member.name?.getText()
                    const allowUndefined = member.questionToken ? true : false
                    const variableType = member.forEachChild(n => {
                        switch (n.kind) {
                            case ts.SyntaxKind.QuestionToken:
                            case ts.SyntaxKind.Identifier:
                                // Name, ignore...
                                break;
                            case ts.SyntaxKind.StringKeyword:
                                return 'string'
                            case ts.SyntaxKind.BooleanKeyword:
                                return 'boolean'
                            case ts.SyntaxKind.AnyKeyword:
                                return 'json'
                            case ts.SyntaxKind.NumberKeyword:
                                const baseType = this.getJsDocTags(member)?.filter(x => x.tagName.getText() == 'opti').at(0)?.comment || 'integer'
                                return typeof baseType == 'string' ? baseType : 'integer'
                            default:
                                console.log("Unsupported kind", variableName, n.kind)
                        } 
                    }) ?? 'string';
                    const variableDefault = member.forEachChild(n => {
                        switch (n.kind) {
                            case ts.SyntaxKind.QuestionToken:
                            case ts.SyntaxKind.Identifier:
                                // Name, ignore...
                                break;
                            case ts.SyntaxKind.StringKeyword:
                            case ts.SyntaxKind.BooleanKeyword:
                            case ts.SyntaxKind.AnyKeyword:
                            case ts.SyntaxKind.NumberKeyword:
                                const defaultValue = this.getJsDocTags(member)?.filter(x => x.tagName.getText() == 'defaultValue').at(0)?.comment || ''
                                return typeof defaultValue == 'string' ? defaultValue : ''
                            default:
                                console.log("Unsupported kind", variableName, n.kind)
                        } 
                    }) ?? 'string';
                    const variableDescription = this.getJsDocText(member)?.join("") ?? ""
                    flags[flagName].variable_definitions[variableName] = {
                        key: variableName,
                        description: variableDescription,
                        mandatory: !allowUndefined,
                        type: variableType,
                        default_value: variableDefault
                    }

                })
            })
        }

        ts.forEachChild(node, (n: ts.Node) => { this._getExportedFlags(n, flags);})
        return flags 
    }
}

export default FlagsTypeScriptFile