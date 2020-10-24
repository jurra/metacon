// import the model created from folders
const fs = require('fs');
const {contents} = require("../contentsBuilder")

// for each level 2 create modules data structurelet modules = { }
let modules = {}
contents.forEach(element => {
    if(element.level == 2){
        const files = fs.readdirSync(element.path).filter((f) => {
            if (f === "README.md" || f === "index.md") return false;
            if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
            return fs.existsSync(element.path + "/" + f) && fs.statSync(element.path + "/" + f).isFile();
          });
          modules[element.relativePath] = files
    }
})

modules['/']=[''];    

module.exports.modules = modules;
// console.log(modules);
// OUTPUT modules = { "/modulePath/":["file1.md", "file2.md"], "/module2/":[...] }
