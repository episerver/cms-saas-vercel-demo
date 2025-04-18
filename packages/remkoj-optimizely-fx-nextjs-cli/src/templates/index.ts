import { TemplateEngine } from '../tplengine/engine.js'
import type { InferDefinitions } from '../tplengine/types.js'
import { type ProjectFileTemplateContext } from './base.js'
import flagContext from './flags.js'
import flags from './flags.handlebars'
import vercel from './vercel.handlebars'
import datafile from './datafile.handlebars'
import context from './context.handlebars'
import reactHookClient from './hook.client.handlebars'
import reactHookServer from './hook.server.handlebars'

// All templates
const templates = {
    flags: {
        template: flags,
        values: flagContext
    },
    vercel: {
        template: vercel
    },
    datafile: {
        template: datafile
    },
    context: { 
        template: context 
    },
    "useFlag.client": {
        template: reactHookClient
    },
    "useFlag.server": {
        template: reactHookServer
    }
}

type OptimizelyFxTemplates = InferDefinitions<typeof templates>

export const engine = (new TemplateEngine<OptimizelyFxTemplates, ProjectFileTemplateContext>(templates))

export default engine
