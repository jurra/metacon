// Get folder structure algorithm...
// for each parent folder create a path (route)
/**
 * Folder is a module....
 * File is a page
 * For each module build a sidebar with name of pages
 * 
 */
// Build a datastructure for sidebar configuration

// Push the module into the vuepress config automatically

// Other things:
// todo: Extract metadata from module.md
// todo: Process-title of module conventions
// todo: Locales


// todo: Consider setting up state management for the title....

//create sidebar
const fs = require('fs');
const path = require('path');



/**
 * 
 * @param {*} path of the module to get info from
 */
function bdModule(path) {
  // get directory
  const dirs = fs.readdirSync(path).filter((f) => {
    //ignore directory start with .
    if (f.charAt(0) === "." || f === "images") return false;
    return fs.existsSync(path + "/" + f) && fs.statSync(path + "/" + f).isDirectory();
  });
  //list to under the docs files
  const files = fs.readdirSync(path).filter((f) => {
    //README.md and index.md skip
    if (f === "README.md" || f === "index.md") return false;
    //ignore not .md and .html files
    if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
    return fs.existsSync(path + "/" + f) && fs.statSync(path + "/" + f).isFile();
  });

  // todo: remove md probably is causing issues
  // sidebarObj
  const obj = dirs.reduce((o, key) => ({
    ...o, [`/${key}/`]:
      fs.readdirSync(path + "/" + key).map((childDir) => {
        return childDir == 'README.md'? '' : childDir
        // return childDir
      })
  }), {})

  obj['/']=[''];

  // console.log(obj);
  return obj;
}



/**
 * EDGE CASES:
 * What happens when two blocks have the same exact object names
 */

let result = bdModule('.docs/Bloque');
let result2 = bdModule('.docs/Segundo_Bloque');

// console.log(result);
// console.log(result2);

/**
 * For each content block, extract modules
 */

let result3 = {
    ...bdModule('.docs/Bloque'),
    ...bdModule('.docs/Segundo_Bloque')
}

console.log(result3)







