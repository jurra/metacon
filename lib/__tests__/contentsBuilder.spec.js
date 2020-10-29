/**
 * Normal handling
 */
let { Node } = require("../models/contentNode")
let { checkContent, buildContents } = require("../contentsBuilder.js")
let { buildSidebar } = require("../adapters/vuepress.js")
let YAML = require("yamljs")
let fs = require('fs')

it('Turns the json object into a node', () => {
   let js = YAML.parse(fs.readFileSync(`${__dirname}/mocks/content.yaml`, 'utf8'))
   let newNode = new Node(js, `${__dirname}/mocks/content.yaml`)
   expect(newNode).toHaveProperty('title')
})

it('Rejects an invalid contents metadata', () => {
   expect(checkContent(`${__dirname}/mocks/badContent.yaml`)).toBe(false)
})

it('Accepts valid contents metadata', () => {
   expect(checkContent(`${__dirname}/mocks/content.yaml`)).toBe(true)
})

it('Builds a valid vuepress nested sidebar', () => {
   let sitePath = `${__dirname}/mocks/site/`
   let mockData = {
      '/modulo/': [''],
      '/modulo_1/': ['', 'Capitulo.md', 'Divine_Content.md'],
      '/modulo_2/': ['', 'Intro.md'],
      '/': ['']
   }
   let dirPath = sitePath
   let contents = buildContents(sitePath, sitePath)
   let sidebar = buildSidebar(contents, dirPath)
   expect(mockData).toEqual(sidebar)
})
