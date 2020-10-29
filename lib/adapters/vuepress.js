const fs = require('fs')

module.exports.buildSidebar = (contents, baseDir) => {
    // console.log(contents)
    let modules = {}
    contents.forEach(content => {
        if (content.level == 2) {
            let files = fs.readdirSync(baseDir + content.relativePath).filter((f) => {
                if (f === "README.md" || f === "index.md") return false
                if (!(f.endsWith(".md") || f.endsWith(".html"))) return false
                return fs.existsSync(`${baseDir}${content.relativePath}${f}`) && fs.statSync(`${baseDir}${content.relativePath}/${f}`).isFile();
            })

            // The readme by convention is represented as an empty string in the sidebar
            files.unshift('') // we add it at the beginning of the array
            modules[content.relativePath] = files
        }
    })
    modules['/'] = ['']
    return modules
}