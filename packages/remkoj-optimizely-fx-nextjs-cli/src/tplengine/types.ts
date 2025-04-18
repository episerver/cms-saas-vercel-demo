
export type TemplateVariables = {
    [ variableName: string ]: any
}

export type TemplateRegistration<DT extends TemplateVariables = TemplateVariables, RT extends TemplateVariables = TemplateVariables> = {
    values?: DT | ((context: RT) => DT | Promise<DT>)
    template: string
}

export type TemplateDefinitions = {
    [templateHandle: string]: TemplateVariables
}

export type TemplateRegistrations<RT extends TemplateVariables = TemplateVariables> = {
    [ handle: string ]: TemplateRegistration<TemplateVariables, RT>
}

export type InferDefinitions<TR extends TemplateRegistrations> = {
    [ H in keyof TR ]: TR[H] extends TemplateRegistration<infer TV> ? TV : TemplateVariables
}

export type InferRegistrations<TD extends TemplateDefinitions, RT extends TemplateVariables = TemplateVariables> = {
    [ H in keyof TD ]: TemplateRegistration<TD[H], RT>
}

export interface ITemplateEngine<TD extends TemplateDefinitions, RT extends TemplateVariables> {

    addTemplates<ATD extends TemplateDefinitions>(templates: InferRegistrations<ATD, RT>): ITemplateEngine<TD & ATD, RT>

    /**
     * Register a new template 
     * 
     * @param handle 
     * @param registration 
     */
    addTemplate<H extends string, D extends TemplateVariables>(handle: H, registration: TemplateRegistration<D, RT>): ITemplateEngine<TD & Record<H,D>, RT>

    /**
     * Render previously registered template
     * 
     * @param handle            The template key
     * @param variables         The variables to be assigned to the template
     * @param templateOverride  Load the template from this file, instead of using the registered template
     */
    render<K extends keyof TD>(handle: K, variables: RT, templateOverride?: string): Promise<string>
}