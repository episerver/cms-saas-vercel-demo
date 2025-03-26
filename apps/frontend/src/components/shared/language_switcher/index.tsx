import dict from "@shared/dictionary.json";
import { type DropDownOption} from "@shared/drop_down";
import DropDown from "./_client";
import { cache } from 'react';
import getSdk from "@/sdk";
import { type GenericContext } from "@remkoj/optimizely-cms-react/rsc";

export type LanguageSwitcherProps = {
    ctx?: GenericContext
} & JSX.IntrinsicElements['div']

export async function LanguageSwitcher ({ ctx, ...divProps }: LanguageSwitcherProps)
{
    const locales = await getLocales()
    const { locale: currentLocale = "en" } = ctx ?? { locale: 'en' }

    // If there're less the two locales, don't show the picker
    if (locales.length < 2)
        return null

    const list : Array<DropDownOption> = locales.map(locale => { return { value: locale, label: ((dict[currentLocale ?? locale]?.languagePicker.locales[locale]) ?? locale) as string }})
    const label = (dict[currentLocale]?.languagePicker.title as string) ?? "Select language"
    
    return <div {...divProps} data-component="LanguagePicker">
        <DropDown options={ list } value={ list.find(x => x.value == currentLocale )} label={ label } compact />
    </div>
}

export default LanguageSwitcher

/**
 * Retrieve the available locales by schema introspection, as it is currently
 * not possible to fetch the available locales by application.
 * 
 * @param       includeSystem   Set this to true to include the system locales (ALL and NEUTRAL)
 * @returns     The list of available locales
 */
const getLocales = cache(async (includeSystem: boolean = false) => {
    const sdk = getSdk();
    const locales = (await sdk.getLocales().catch((e: { response: { code: string, status: number, system: { message: string, auth: string} }}) => {
        console.error(`❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`)
        return undefined
    }))?.schema?.types?.filter(x => x.kind == "ENUM" && x.name?.endsWith("Locales"))?.map(x => (x.enumValues ?? []).map(y => y.name))?.flat()?.filter((v,i,a) => i <= a.indexOf(v)) ?? []
    return includeSystem ? locales : locales.filter(x => x != 'ALL' && x != 'NEUTRAL')
})