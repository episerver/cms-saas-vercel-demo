/* eslint @next/next/no-before-interactive-script-outside-document: 0 */
import Script from 'next/script'

export type OptimizelyWebExperimentationProps = {
    projectId: string | number
}

export const OptimizelyWebExperimentationScript = (props: OptimizelyWebExperimentationProps) => {
    const project_id = props.projectId

    return <>
        <Script id='web-experimentation-startup' strategy='beforeInteractive'>{ `window["optimizely"] = window["optimizely"] || [];`}</Script>
        <Script id='web-experimentation-project' strategy='beforeInteractive' src={ `https://cdn.optimizely.com/js/${ project_id }.js`} />
    </>
}

export default OptimizelyWebExperimentationScript