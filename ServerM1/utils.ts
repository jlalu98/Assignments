import { resolve } from "node:path";

const fs= require('fs');

function writeDataToFile(filename: any,content: any){
    fs.writeFileSync(filename,JSON.stringify(content),'utf8',(error: any)=>{
        if(error){
           console.log(error);
            
        }
    });
}
function getPostData(req: any){
    //passing req bcause we have to use req.on event emitter
    return new Promise((resolve,reject)=>{
        try{
            let body="";
            req.on('data',(chunk: { toString: () => string; })=>{
                body+=chunk.toString();
            });
            req.on('end',()=>{
                resolve(body);
            });
        }
        catch(error){
          reject(error);  
            
        }
    })

}
module.exports={
    writeDataToFile,
    getPostData
}