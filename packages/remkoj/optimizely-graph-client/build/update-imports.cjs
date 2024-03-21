const path = require('node:path')
const fs = require('node:fs')

console.log("🚀 Post-Processing Admin API Generated files")

// Resolve the code folder
const adminApiFolder = path.normalize(path.join(__dirname,'..','src','admin-api'))
const clientFolder = path.join(adminApiFolder, 'client')
if (!(fs.existsSync(clientFolder) && fs.lstatSync(clientFolder).isDirectory()))
{
    console.error(`🛑 API Client not found at expected folder: ${ clientFolder }`)
    process.exit(1)
}
console.log(`🎯 API Client folder: ${ clientFolder }`)

// Process the folder
processDirectory(clientFolder, adminApiFolder)

/**
 * 
 * @param {string} apiPath 
 * @param {string} basePath 
 * @returns {Promise<boolean>}
 */
function processDirectory(apiPath, basePath)
{
    const directory = fs.opendirSync(apiPath);
    let entry = null
    const promises = []
    while (entry = directory.readSync()) {
        const entryPath = path.join(apiPath, entry.name)
        if (entry.isFile() && shouldProcessFile(entry.name))
            promises.push(processFile(entryPath, basePath))
        else if (entry.isDirectory())
            promises.push(processDirectory(entryPath, basePath))
    }
    return Promise.all(promises).then(() => true).finally(directory.close())
}

/**
 * 
 * @param {string} filePath 
 * @returns {boolean}
 */
function shouldProcessFile(filePath) 
{
    return filePath.endsWith('.ts') && !filePath.endsWith('.d.ts')
}

/**
 * 
 * @param {string} filePath 
 * @param {string} basePath 
 * @returns {Promise<boolean>}
 */
function processFile(filePath, basePath)
{
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
                return
            }

            let importCounter = 0
            const currentData = data.toString('utf-8')
            const replaced = currentData.replaceAll(/^(?:import|export(?:\ type){0,1}\ \{).*from +[\'\"](.*)[\'\"];{0,1}$/gm, (match, file) => {
                let importPath = path.resolve(path.join(path.dirname(filePath), file))
                let importFile = file
                if (file.endsWith('.js')) {
                    importFile = file.substring(0, file.length-3)
                    importPath = importPath.substring(0,importPath.length-3)
                }

                if (fs.existsSync(importPath) && fs.lstatSync(importPath).isDirectory) {
                    importPath = path.join(importPath, 'index')
                    importFile = path.join(importFile, 'index')
                }

                if (!fs.existsSync(importPath+".ts"))
                {
                    if (fs.existsSync(path.join(basePath,importFile+".ts"))) {
                        importFile = `${ path.relative(path.dirname(filePath), path.join(basePath, importFile)).replaceAll('\\','\/') }.js`
                        if (!importFile.startsWith('.'))
                            importFile = "./" + importFile
                        importCounter++
                        return match.replace(file, importFile)
                    }
                } else {
                    if (!importFile.startsWith('.'))
                        importFile = `./${importFile}`
                    importFile = `${ importFile }.js`
                    importCounter++
                    return match.replace(file, importFile)
                }
                return match
            })
            
            if (importCounter > 0) {
                fs.writeFile(filePath, replaced, { encoding: 'utf-8' }, (err) => {
                    if (err)
                        reject(err)
                    else {
                        console.log(`⚡ Updated ${ importCounter } imports in ${ path.relative(basePath, filePath) }`)
                        resolve(true)
                    }
                })
            } else {
                resolve(true)
            }
        })
    })
}
