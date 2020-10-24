/**
 * The module creates a content data structure that
 * used to describe the website's content
 * 
 */
const fs = require('fs')
let { writeFile } = require("fs")
const path = require('path')
const config = require("../hardocs.config.js")
const { walkDir } = require("./utils/walk")
const { Node } = require("./models/contentNode")
const YAML = require("yamljs")
const Ajv = require("ajv")

// const dirPath = __dirname
const dirPath = `${__dirname}${config.base}`


const buildNode = function (yaml, filePath) {
    let js = YAML.parse(yaml);
    let newNode = new Node(js, filePath);
    return newNode;
}

function checkContent(filePath) {
    const ajv = new Ajv
    const schema = {
        type: "object",
        properties: {
            type: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            isPublic: { type: "boolean" },
            isDraft: { type: "boolean" },
            level: { type: "number" }
        },
        required:[
            "type", "title", "description" , "isPublic"
        ]
    }
    let content = fs.readFileSync(filePath, 'utf8')
    content = YAML.parse(content)
    // console.log(`Show me the parsed yaml: ${JSON.stringify(content, null, 2)}`)
    const validate = ajv.compile(schema)
    return validate(content) 
}


let contents = []

// util being used
walkDir(dirPath, function (filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    if (filePath.match(/content.yaml/)) {
        // console.log(checkContent(filePath))
        if(checkContent(filePath)){
            let newNode = buildNode(fileContents, filePath);
            contents.push(newNode)
        }
    }
});

// write the module in a file
module.exports.contents = contents
writeFile(`${dirPath}\\.vuepress\\contents.data.json`, `{"contents":${JSON.stringify(contents)}}`, "utf8", function (err) {
    if (err) return err;
})










