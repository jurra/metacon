const path = require('path')
const {buildContents} = require ("./lib/contentsBuilder.js")
const {buildSidebar} = require ("./lib/adapters/vuepress.js")

module.exports = {
    buildContents,
    buildSidebar
}

// const __dirname = path.dirname(new URL(import.meta.url).pathname).replace(/^\/|\/$/g, '')
// console.log(__dirname)

// let contents = buildContents(`${__dirname}/lib/__tests__/mocks/site/`, __dirname)
// console.log(contents)
// let sidebar = buildSidebar(contents)

// console.log(sidebar)


