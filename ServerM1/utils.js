"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', function (error) {
        if (error) {
            console.log(error);
        }
    });
}
function getPostData(req) {
    //passing req bcause we have to use req.on event emitter
    return new Promise(function (resolve, reject) {
        try {
            var body_1 = "";
            req.on('data', function (chunk) {
                body_1 += chunk.toString();
            });
            req.on('end', function () {
                resolve(body_1);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
module.exports = {
    writeDataToFile: writeDataToFile,
    getPostData: getPostData
};
