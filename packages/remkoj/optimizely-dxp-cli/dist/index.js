import initEnvironment from './context/env.js';
import createCliApp from './app.js';
import commands from './commands/index.js';
var APP;
(function (APP) {
    APP["Script"] = "frontend-cli";
    APP["Version"] = "1.0.0";
})(APP || (APP = {}));
initEnvironment();
const app = createCliApp(APP.Script, APP.Version);
app.command(commands);
app.parse(process.argv.slice(2));
