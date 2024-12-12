import { type NextRequest, NextResponse } from "next/server";

function handle(req: NextRequest) : NextResponse
{
    const variables : Map<string,string> = new Map<string,string>()
    
    variables.set('font-size-normal', '16px')
    variables.set('font-size-desktop', '20px')

    let variableDefinitions = ""
    variables.forEach((v,k) => {
        variableDefinitions += `  --${k}: ${v};\n`
    })

    let styles = ""
    let desktopStyles = ""
    if (variables.has("font-size-normal"))
        styles += `  font-size: var(--font-size-normal);\n`
    if (variables.has("font-size-desktop"))
        desktopStyles += `    font-size: var(--font-size-desktop);\n`

    let css = `html {
${ variableDefinitions }
${ styles }}

@media (min-width: 1024px) {
  html {
${ desktopStyles }}
}`
    
    return new NextResponse(css, {
        headers: {
            "Content-Type": "text/css"
        }
    })
}

export const GET = handle
export const runtime = 'nodejs'