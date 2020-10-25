import path from 'path'
import { buildContents } from "./lib/contentsBuilder.js"
import { buildSidebar } from "./lib/adapters/vuepress.js"

export {
    buildContents
}

const __dirname = path.dirname(new URL(import.meta.url).pathname).replace(/^\/|\/$/g, '')
console.log(__dirname)

let contents = buildContents(`${__dirname}/lib/__tests__/mocks/site/`, __dirname)
let sidebar = buildSidebar(contents)

console.log(sidebar)


