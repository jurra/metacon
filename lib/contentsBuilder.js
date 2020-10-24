/**
 * The module creates a content data structure that
 * used to describe the website's content
 * 
 */
import fs from 'fs'
import { writeFile } from "fs"
import {dirname} from 'path'
import config from  "../hardocs.config.js"
import { walkDir } from "./utils/walk.js"
import { Node } from "./models/contentNode.js"
import YAML from "yamljs"
import Ajv from "ajv"

// const dirPath = __dirname
// const __dirname = dirname(new URL(import.meta.url).pathname);
const dirPath = `${__dirname}${config.base}`

// The node is built for each content metadata
const buildNode = function (yaml, filePath) {
    let js = YAML.parse(yaml);
    let newNode = new Node(js, filePath);
    return newNode;
}

// Make sure that the content metadata is valid
export function checkContent(filePath) {
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
export { contents }

writeFile(`${dirPath}\\.vuepress\\contents.data.json`, `{"contents":${JSON.stringify(contents)}}`, "utf8", function (err) {
    if (err) return err;
})










