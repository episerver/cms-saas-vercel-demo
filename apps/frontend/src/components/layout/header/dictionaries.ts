import 'server-only'
 
const dictionaries : { [locale: string]: () => Promise<any> } = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}
 
export const getDictionary = (locale?: string, fallback?: string) => {
    if (locale) {
        if (dictionaries[locale])
            return dictionaries[locale]()

        const language = locale.split('-')[0]
        if (dictionaries[language])
            return dictionaries[language]()
    }

    if (fallback && dictionaries[fallback])
        return dictionaries[fallback]()

    return Promise.resolve({})
}

export default getDictionary