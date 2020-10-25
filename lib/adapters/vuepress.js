import fs from 'fs'

export function buildSidebar(contents) {
    // console.log(contents)
    let modules = {}
    contents.forEach(element => {
        if (element.level == 2) {
            const files = fs.readdirSync(element.path).filter((f) => {
                if (f === "README.md" || f === "index.md") return false;
                if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
                return fs.existsSync(element.path + "/" + f) && fs.statSync(element.path + "/" + f).isFile();
            });
            modules[element.relativePath] = files
        }
    })
    modules['/'] = ['']
    // console.log(modules)
    return modules
}