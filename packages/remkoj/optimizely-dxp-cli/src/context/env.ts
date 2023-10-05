import * as dotenv from 'dotenv'
import * as dotenvExpand from 'dotenv-expand'
import * as path from 'node:path'

function processEnvFile(suffix: string = "")
{
    const envVars = dotenv.config({
        path: path.resolve(process.cwd(), `.env${ suffix }`)
    });
    dotenvExpand.expand(envVars);
}

const envName = process.env.OPTI_BUILD_ENV ?? process.env.NODE_ENV ?? 'development'
processEnvFile(`.${ envName }.local`)
processEnvFile(`.${ envName }`)
processEnvFile('.local')
processEnvFile();

export function buildEnvironment() : void
{
    //Do nothing here for now
}

export default buildEnvironment