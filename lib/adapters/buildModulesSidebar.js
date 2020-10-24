// import the model created from folders
import fs from 'fs'
import { contents } from "../contentsBuilder.js"

// for each level 2 create modules data structurelet modules = { }
export const modules = {}
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

modules['/'] = [''];     