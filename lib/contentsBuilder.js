/**
 * The module creates a content data structure that
 * used to describe the website's content
 * 
 */
import fs from 'fs'
import path from 'path'
import { writeFile } from "fs"
import { Node } from "./models/contentNode.js"
import YAML from "yamljs"
import Ajv from "ajv"

/**
 * The content node is built for each content metadata
 * @param {String} yaml 
 * @param {String} filePath 
 */
const buildNode = function (yaml, filePath) {
    let js = YAML.parse(yaml);
    let newNode = new Node(js, filePath);
    return newNode;
}

/**
 * Make sure that the content metadata is valid
 * We use here a json schema and ajv to validate the 
 * metadata content
 * @param {String} filePath 
 */
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
        required: [
            "type", "title", "description", "isPublic"
        ]
    }
    let content = fs.readFileSync(filePath, 'utf8')
    content = YAML.parse(content)
    // console.log(`Show me the parsed yaml: ${JSON.stringify(content, null, 2)}`)
    const validate = ajv.compile(schema)
    return validate(content)
}

/**
 * Recursively walk through child directories and 
 * build the nodes when necessesary with their paths
 * @param { String } dir 
 * @param { function } callback 
 */ 
export function walkDir(dir, callback) {
    // console.log("This is the directory path:" + JSON.stringify(dir))
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};


/**
 * @param {String} dirPath the folder that contains the contents
 */
export function compileMetadataFromFiles(dirPath) {
    let contents = []
    walkDir(dirPath, function (filePath) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        if (filePath.match(/content.yaml/)) {
            // console.log(checkContent(filePath))
            if (checkContent(filePath)) {
                let newNode = buildNode(fileContents, filePath);
                contents.push(newNode)
            }
        }
    });
    return contents
}

/**
 * @param { String } destFolder the path where the json will be written
 * @param { String } contents the contents to be written in json
 */
export function writeCompiledMetadata(destFolder, contents) {
    writeFile(
        `${destFolder}\\contents.data.json`,
        `{"contents":${JSON.stringify(contents, null, 2)}}`,
        "utf8", function (err) {
            if (err) return err;
        })
}

export function buildContents(dirPath, destFolder){
    console.log("Building contents")
    const contents = compileMetadataFromFiles(dirPath)
    writeCompiledMetadata(destFolder, contents)
    return contents
}










