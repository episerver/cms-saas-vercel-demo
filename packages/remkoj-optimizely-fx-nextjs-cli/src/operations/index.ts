const basePath = "/v2/"
const baseUrl = "https://api.optimizely.com"

export type Credentials = {
    projectId: string
    accessToken: string
}

export async function upsertAttributes(attributes: Array<{ key: string, description?: string, archived?: boolean }>, credentials: Credentials)
{
    const currentAttributes = await getAttributes(credentials)

    const results = await Promise.all(attributes.map(attribute => {
        if (currentAttributes.some(x => x.key == attribute.key))
            return "Exists "+attribute.key
        else
            return create("attributes", {
                project_id: Number.parseInt(credentials.projectId),
                ...attribute
            }, credentials)
    }))

    console.log(results)
}

export async function getAttributes(credentials: Credentials) : Promise<Array<{ key: string, id: number, description: string, archived: boolean}>>
{
    return getAll('attributes', credentials)
}

export async function getAll(entity: string, { projectId, accessToken }: Credentials ) : Promise<Array<any>>
{
    // Prepare
    const pageUrl = new URL(basePath + entity, baseUrl)
    pageUrl.searchParams.set('per_page', '25')
    pageUrl.searchParams.set('page', '1')
    pageUrl.searchParams.set('project_id', projectId)
    const headers = {
        Authorization: "Bearer " + accessToken
    }

    const result = await fetch(pageUrl, { headers })
    if (!result.ok)
        throw new Error(`${ result.status }: ${ result.statusText }`)
    const resultData : Array<any> = await result.json()

    console.log("Resultdata", resultData)

    return resultData
}

export async function create(entity: string, data: any, { accessToken}: Credentials)
{
    // Prepare
    const createUrl = new URL(basePath + entity, baseUrl)
    const headers = {
        authorization: "Bearer " + accessToken,
        accept: "application/json",
        "content-type": "application/json",
    }

    
    console.log(createUrl.href, headers, JSON.stringify(data))

    const response = await fetch(createUrl, { 
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })


    if (!response.ok)
        throw new Error(`${ response.status }: ${ response.statusText }`)
    return response.json()
}

export async function update(entity: string, id: string, data: any, { projectId, accessToken}: Credentials)
{
    
}