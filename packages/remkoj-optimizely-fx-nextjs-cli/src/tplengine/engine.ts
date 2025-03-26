import type { InferRegistrations, ITemplateEngine, TemplateDefinitions, TemplateRegistration, TemplateVariables } from "./types.js";
import Handlebars from "handlebars";
import fs from "node:fs";

export class TemplateEngine<TD extends TemplateDefinitions, RT extends TemplateVariables> implements ITemplateEngine<TD,RT> {
    protected _templates : InferRegistrations<TD,RT>

    public constructor (templates: InferRegistrations<TD,RT>) 
    {
        this._templates = templates
        Handlebars.registerHelper('strtpl', (aString: any) => { return '${'+aString.toString()+'}'})
    }

    addTemplates<ATD extends TemplateDefinitions>(templates: InferRegistrations<ATD, RT>): ITemplateEngine<TD & ATD, RT> {
        this._templates = {
            ...this._templates,
            ...templates
        }
        return this as ITemplateEngine<TD & ATD, RT>
    }

    addTemplate<NewHandle extends string, D extends TemplateVariables>(handle: NewHandle, registration: TemplateRegistration<(TD & Record<NewHandle, D>)[NewHandle]>): ITemplateEngine<TD & Record<NewHandle,D>, RT> {
        type NewRegistrations = InferRegistrations<TD & Record<NewHandle,D>, RT>;
        (this._templates as NewRegistrations)[handle] = registration
        return this
    }

    async render<K extends keyof TD>(handle: K, context: RT, templateOverride?: string): Promise<string> {
        const templateContent = (templateOverride ? ((await this.readTemplateFromFile(templateOverride)) || this._templates[handle]?.template) : this._templates[handle]?.template) || ""
        const template = Handlebars.compile(templateContent, { noEscape: true })
        const variables : RT | TD[K] = typeof(this._templates[handle]?.values) == 'object' && this._templates[handle].values != null ? { ...this._templates[handle].values, ...context } : ( typeof(this._templates[handle]?.values) == 'function' ? await this._templates[handle].values(context) : context)
        //console.log('TemplateEngine', handle, "Variables", variables)
        return template(variables, {  })
    }

    protected async readTemplateFromFile(filename: string, encoding: BufferEncoding = 'utf8') : Promise<string>
    {
        return new Promise<string>((resolve, reject) => {
            const abort = new AbortController()
            const timeoutId = setTimeout(() => {
                abort.abort("Reading the file took more then 5 seconds")
            }, 5000);
            fs.readFile(filename, {
                encoding,
                signal: abort.signal
            }, (err, data) => {
                clearTimeout(timeoutId)
                if (err) {
                    if (err.code === 'ENOENT')
                        resolve("")
                    else
                        reject(err)
                }
                resolve(data.toString())
            })
        })
    }
    
}