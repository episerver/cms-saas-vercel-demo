import initEnvironment from './context/env.js'
import createCliApp from './app.js'
import commands from './commands/index.js'

// Define the package constants
const enum APP {
    Script = "frontend-cli",
    Version = "1.0.0"
}

// Make sure the environment variables are correctly processed
initEnvironment()

// Create the application
const app = createCliApp(APP.Script, APP.Version)
app.command(commands)

// Parse the command line
app.parse(process.argv.slice(2))