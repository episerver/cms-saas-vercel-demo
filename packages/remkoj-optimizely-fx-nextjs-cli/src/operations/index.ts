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

    results
}

export type OptiFxFlag = { 
    key: string, 
    name: string, 
    description: string, 
    url?: string, 
    update_url?: string, 
    delete_url?: string, 
    archive_url?: string,
    variable_definitions: {
        [ key: string ]: OptiFxVariableDefinition
    }
    environments?: {
        [ key: string ]: OptiFxEnvironmentConfig
    }
    id?: number,
    urn?: string
    archived?: boolean,
    outlier_filtering_enabled?: boolean
    project_id: number,
    account_id?: number
    role?: string
    revision?: number
}

type OptiFxVariableDefinition = {
    key: string
    description: string
    type: string
    default_value: string
    created_time?: string
    updated_time?: string
}
type OptiFxEnvironmentConfig = {}

export async function getFlags(credentials: Credentials) : Promise<Array<OptiFxFlag>>
{
    return getAllFx<OptiFxFlag>('/flags/v1/projects/{projectId}/flags', credentials).catch(() => {
        process.stderr.write("\nERROR: Unable to read projects from Feature Experimentation, assuming no projects remotely defined\n")
        return []
    })
}

export async function getAttributes(credentials: Credentials) : Promise<Array<{ key: string, id: number, description: string, archived: boolean}>>
{
    return getAll('attributes', credentials)
}

export async function getAllFx<T = any>(path: string, credentials: Credentials & { [propName: string]: string }) : Promise<Array<T>>
{
    // Prepare paging
    const pageSize : number = 25
    let currentPage : number = 0
    let totalPages = 0
    const fetchedItems : T[] = []

    // Build URL & Headers
    const pageUrl = new URL(path, baseUrl)
    for (const key in credentials)
        pageUrl.pathname = pageUrl.pathname.replaceAll(encodeURIComponent(`{${key}}`), encodeURIComponent(credentials[key]))
    
    pageUrl.searchParams.set('per_page', pageSize.toString())
    pageUrl.searchParams.set('archived', 'false')
    const headers = {
        "accept": "application/json",
        "authorization": `Bearer ${ credentials.accessToken }`
    }

    // Loop
    do {
        // Move to next page
        currentPage ++
        pageUrl.searchParams.set('page_number', currentPage.toString())

        // Fetch page
        const result = await fetch(pageUrl, { headers })
        if (!result.ok)
            throw new Error(`${ result.status }: ${ result.statusText }`)
        const responseData : { total_count: number, total_pages: number, last_url: string, create_url: string, items: T[], count: number, url: string, page: number, first_url: string } = await result.json()

        // Update context
        totalPages = responseData?.total_pages || 0
        fetchedItems.push(...(responseData?.items || []))
    } while (currentPage < totalPages)

    // Return results
    return fetchedItems
}

export async function getAll(entity: string, { projectId, accessToken }: Credentials ) : Promise<Array<any>>
{
    // Prepare
    const pageUrl = new URL(basePath + entity, baseUrl)
    pageUrl.searchParams.set('per_page', '25')
    pageUrl.searchParams.set('page', '1')
    pageUrl.searchParams.set('project_id', projectId)
    const headers = {
        authorization: "Bearer " + accessToken
    }

    const result = await fetch(pageUrl, { headers })
    if (!result.ok)
        throw new Error(`${ result.status }: ${ result.statusText }`)
    const resultData : Array<any> = await result.json()

    //console.log("Resultdata", resultData)

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