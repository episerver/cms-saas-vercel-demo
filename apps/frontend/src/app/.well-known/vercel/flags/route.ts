import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { unstable_getProviderData as getProviderData } from "@vercel/flags/next";
import * as flags from '../../../../flags'; 

export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });

    //Retrieve the flags from the definitions file
    const provider = getProviderData(flags)

    // Update the options from Feature Experimentation
    // @ts-ignore: Node-Types may or may not be available
    const accessToken = process.env.OPTIMIZELY_FX_PAT
    // @ts-ignore: Node-Types may or may not be available
    const projectId = process.env.OPTIMIZELY_FX_PROJECT
    if (accessToken && projectId) {
        console.log(`Credentials present, loading current flag variations from project ${ projectId }`)
        provider.hints.push({key: "updated_opti_variants", text: "Using current Optimizely Feature Variations"})
        for(const flagKey of Object.getOwnPropertyNames(provider.definitions))
        {
            console.log(`Updating for flag ${ flagKey }`)
            const variations = await fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags/${flagKey}/variations?archived=false&per_page=100`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())

            const newOptions = variations.items.map(item => 
            { 
                return {
                    label: item.name,
                    value: buildVariantValues(item)
                }
            })
            provider.definitions[flagKey].options = newOptions
        }
    } else {
        provider.hints.push({key: "opti_keys_missing", text: "Configure your Optimizely project id and a personal access token to see up-to-date feature options"})
    }

    return NextResponse.json<ApiData>(provider);
}

function buildVariantValues(variation: any, fieldName = "value") {
    const variantValues = {
        _enabled: variation.enabled
    }

    for (var entry of Object.getOwnPropertyNames(variation.variables)) {
        variantValues[entry] = parseValue(variation.variables[entry].type, variation.variables[entry][fieldName])
    }

    return variantValues
}

/**
 * Process a value reported from the Optimizely FX API
 * 
 * @param       type    The value type reported
 * @param       value   The string encoded version of the value
 * @returns     The parsed value
 */
function parseValue(type: string, value: string) : string | boolean | number | object
{
    switch (type) {
        case 'boolean':
            return value == 'true'
        case 'integer':
            return Number.parseInt(value)
        case 'double':
            return Number.parseFloat(value)
        default:
            return value
    }
}