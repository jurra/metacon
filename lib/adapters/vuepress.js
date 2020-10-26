const fs = require('fs')

/**
 * @param { Object } contents the contents js
 * @param { String } baseDir the directory where the contents live 
 */
module.exports.buildSidebar = (contents, baseDir) => {
    // console.log(contents)
    let modules = {}
    contents.forEach(element => {
        if (element.level == 2) {
            const files = fs.readdirSync(baseDir + element.relativePath).filter((f) => {
                // FIXME: This is causing that the readmes are not also put in the sidebar
                // if (f === "README.md" || f === "index.md") return false;
                if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
                return fs.existsSync(`${baseDir}${element.relativePath}/${f}`) && fs.statSync(`${baseDir}${element.relativePath}/${f}`).isFile();
            });
            modules[element.relativePath] = files
        }
    })
    modules['/'] = ['']
    return modules
}