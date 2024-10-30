/**
 * Read a configured layout setting from Style properties retrieved through Optimizely Graph
 *
 * @param   from            The Layout Settings as provided for Visual Builder rendered elements
 * @param   settingName     The name of the setting to retrieve the value for
 * @param   defaultValue    THe default value for when the setting is missing or not set
 * @returns The setting value
 */
export function readSetting(from, settingName, defaultValue) {
    const rv = from?.settings?.filter(x => x.key == settingName)[0]?.value;
    return (rv || defaultValue);
}
export function extractSettings(from) {
    if (!from)
        return {};
    const extracted = {};
    from?.settings?.forEach((itm) => {
        if (itm.value)
            extracted[itm.key] = itm.value;
    });
    return extracted;
}
//# sourceMappingURL=cms-styles.js.map