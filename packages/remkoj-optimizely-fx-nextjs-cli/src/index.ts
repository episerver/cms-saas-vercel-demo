import createOptiCmsApp from './app.js'
import { commands } from './commands/index.js'

const app = createOptiCmsApp("opti-fx", "1.0.0")
app.command(commands)
app.parse(process.argv.slice(2))