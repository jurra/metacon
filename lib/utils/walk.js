const fs = require('fs');
const path = require('path');
 
module.exports.walkDir = function walkDir(dir, callback) {
    // console.log("This is the directory path:" + JSON.stringify(dir))
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};




