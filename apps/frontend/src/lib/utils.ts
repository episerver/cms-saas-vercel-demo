/**
 * Merge a list of CSS classes into a single value, this function will correctly
 * filter empty, `null` or `undefined` values from the generated class string
 * 
 * @param       classNames      The list of CSS classes
 * @returns     The merged class
 */
export function cn(...classNames: (null|undefined|string|(null|undefined|string)[])[]) : string
{
    return classNames.map(c => Array.isArray(c) ? c.map(s=>s?s.trim():s).filter(isNonEmptyString).join(' ') : c).map(s=>s?s.trim():s).filter(isNonEmptyString).join(' ')
}

export function removeDuplicates<T>(currentValue: T, index: number, list: T[]) {
  return list.indexOf(currentValue) === index;
}

/**
 * Test if an optional value is set
 * 
 * @param       toTest          The value to test
 * @returns     Returns `true` if the value is evaluated to true, `false` otherwise
 */
export function notEmpty<T>(toTest: T | null | undefined) : toTest is T
{ 
    return toTest ? true : false
}

export function tryParseInt(input?: string | number | null, defaultValue: number = 0) {
  if (typeof input == "number") return input;
  if (typeof input == "string")
    try {
      const v = Number.parseInt(input);
      return isNaN(v) ? defaultValue : v;
    } catch {
      return defaultValue;
    }
  return defaultValue;
}

/**
 * Try parsing the input, if the input is not a string it will be returned as-is, assuming that the JSON decoding
 * has already been done elsewhere
 * 
 * @param   input     The string to JSON decode
 * @param   reviver   The reviver used by `JSON.parse()`
 * @returns The revived data, or `undefined` when there's an error parsing the data
 */
export function tryParseJson<R = any>(input?: R | string | null, reviver?: (this: any, key: string, value: any) => any) : R|undefined {
  try {
    if (input && typeof(input) === "string")
      return JSON.parse(input, reviver) as R
    return input as R
  } catch {
    // Ignored on purpose
  }
  return undefined
}

export function isNonEmptyString(input?: any) : input is string
{
  return typeof(input) === 'string' && input.length > 0
}