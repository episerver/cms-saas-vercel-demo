import 'server-only'
 
const dictionaries : {[locale: string]: () => Promise<any>} = {
  en: () => import('./en.json').then((module) => module.default),
  nl: () => import('./en.json').then((module) => module.default),
  'nl-BE': () => import('./en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => dictionaries[locale]()
export default getDictionary