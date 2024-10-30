export type StyleDefinition<TN extends string = string> = {
    key: string;
    displayName: string;
    isDefault: boolean;
    settings: Record<string, StyleSetting>;
} & (ElementStyleDefinition<TN> | BaseStyleDefinition<TN> | NodeStyleDefinition<TN>);
export type ElementStyleDefinition<TN extends string> = {
    contentType: TN;
};
export type BaseStyleDefinition<TN extends string> = {
    baseType: TN;
};
export type NodeStyleDefinition<TN extends string> = {
    nodeType: TN;
};
export type StyleSetting = {
    displayName: string;
    sortOrder: number;
    editor?: string;
    choices: Record<string, {
        displayName: string;
        sortOrder: number;
    }>;
};
export type LayoutProps<T extends StyleDefinition<string>> = {
    type: T extends ElementStyleDefinition<infer TN> ? TN : (T extends BaseStyleDefinition<infer TN> ? TN : (T extends NodeStyleDefinition<infer TN> ? TN : null));
    layoutType: string;
    template: T['key'] | null;
    settings: LayoutPropsSetting<T['settings']>[];
};
export type LayoutPropsSetting<T extends Record<string, StyleSetting>, K extends keyof T = keyof T> = LayoutPropsSettingChoices<T>[K];
export type LayoutPropsSettingChoices<T extends Record<string, StyleSetting>> = {
    [K in keyof T]: {
        key: K;
        value: keyof T[K]['choices'];
    };
};
export type LayoutPropsSettingKeys<CL extends LayoutProps<any>> = CL['settings'][number]['key'];
export type LayoutPropsSettingValues<CL extends LayoutProps<any>, K extends LayoutPropsSettingKeys<CL>> = Extract<CL['settings'][number], {
    key: K;
}>['value'];
/**
 * Read a configured layout setting from Style properties retrieved through Optimizely Graph
 *
 * @param   from            The Layout Settings as provided for Visual Builder rendered elements
 * @param   settingName     The name of the setting to retrieve the value for
 * @param   defaultValue    THe default value for when the setting is missing or not set
 * @returns The setting value
 */
export declare function readSetting<T extends LayoutProps<any>, F extends LayoutPropsSettingKeys<T>, DV extends LayoutPropsSettingValues<T, F> | undefined>(from: T | undefined, settingName: F, defaultValue?: DV): DV extends undefined ? (LayoutPropsSettingValues<T, F> | undefined) : Exclude<LayoutPropsSettingValues<T, F>, undefined>;
export declare function extractSettings<T extends LayoutProps<any>>(from: T | undefined): Partial<{
    [K in LayoutPropsSettingKeys<T>]: LayoutPropsSettingValues<T, K>;
}>;
