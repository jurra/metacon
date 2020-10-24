/**
 * 
 */
module.exports.Node =  class Node {
    /**
     * The model gets a json metadata spec describing a content object
     * @param {Object} json it has to respect certain schema to pass
     * @param {String} path path to the
     */
    constructor(json, path){

        // TODO: Schema validation before.....
        // TODO: Check if the yaml is empty
        
        this.id = Math.floor(Math.random() * 1000)
        this.description = json.description ? json.description : "No description provided"
        this.title = json.title ? json.title : null
        this.isPublic = json.isPublic = true ? true : false
        this.isDraft = json.isDraft  ? json.isDraft : false
        this.type = json.type ? json.type : "section"
        this.level = json.level ? json.level : 1 ;
        this.parent = null ;// we need to specify the current parent
        this.children = [];
        this.path = path.match(/.*\\([^\\]+)\\/) ? path.match(/.*\\([^\\]+)\\/)[0] : null; // FIXME: TypeError: Cannot read property '0' of null
        this.relativePath = `/${path.match(/.*\\([^\\]+)\\/)[1]}/`;
        this.authors = json.authors ? json.authors : "";
    }
}

