/**
 * Normal handling
 */
let { Node } = require("../models/contentNode")
let { checkContent } = require("../contentsBuilder.js")
let { buildSidebar } = require("../adapters/vuepress.js")
let YAML = require("yamljs")
let fs =  require('fs')

 it('turns the json object into a node', ()=> {
    let js = YAML.parse(fs.readFileSync(`${__dirname}/mocks/content.yaml`, 'utf8'))
    console.log(js)
    let newNode = new Node(js, `${__dirname}/mocks/content.yaml` )
    expect(newNode).toHaveProperty('title')
 })
 
 it('It rejects an invalid contents metadata', () => {
    expect(checkContent(`${__dirname}/mocks/badContent.yaml`)).toBe(false)
 })

 it('It accepts valid contents metadata', () => {
   expect(checkContent(`${__dirname}/mocks/content.yaml`)).toBe(true)
})
