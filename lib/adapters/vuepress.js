const fs = require('fs')

module.exports.buildSidebar = (contents, baseDir) => {
    // console.log(contents)
    let modules = {}
    contents.forEach(element => {
        if (element.level == 2) {
            let files = fs.readdirSync(baseDir + element.relativePath).filter((f) => {
                if (f === "README.md" || f === "index.md") return false
                if (!(f.endsWith(".md") || f.endsWith(".html"))) return false
                return fs.existsSync(`${baseDir}${element.relativePath}/${f}`) && fs.statSync(`${baseDir}${element.relativePath}/${f}`).isFile();
            })

            // The readme by convention is represented as an empty string in the sidebar
            files.unshift('') // we add it at the beginning of the array
            modules[element.relativePath] = files
        }
    })
    modules['/'] = ['']
    return modules
}