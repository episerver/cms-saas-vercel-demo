import { type ProjectFileTemplateContext } from './base.js'

type FlagsTemplateContext = ProjectFileTemplateContext & {
  runAnnotation: string
}

export const values = (ctx: ProjectFileTemplateContext) : FlagsTemplateContext => {
  return {
    runAnnotation: '\'use server\'',
    ...ctx
  }
}

export default values