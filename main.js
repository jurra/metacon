const path = require('path')
const {buildContents} = require ("./lib/contentsBuilder.js")
const {buildSidebar} = require ("./lib/adapters/vuepress.js")

module.exports = {
    buildContents,
    buildSidebar
}


