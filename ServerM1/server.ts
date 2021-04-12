import http=require('http');
//const book=require('./db.json');
const {getBooks,getBook,createBook,updateBook,deleteBook,getBookByAuthor} = require('./bookController');
const server= http.createServer((req,res)=>{
   
    if(req.url=="/books"&&req.method=="GET"){
        getBooks(req,res);
    }else if(req.url?.match(/\/books\/([0-9]+)/)&&req.method=="GET"){
        const id=req.url.split('/')[2];
        getBook(req,res,id);
    
    }
    else if(req.url?.match(/\/books\/\w+/)&&req.method=="GET"){
        const author=req.url.split('/')[2];
        getBookByAuthor(req,res,author);
    
    }
    else if(req.url=="/books"&&req.method=="POST"){
        createBook(req,res);
    }
    else if(req.url?.match(/\/books\/([0-9]+)/)&&req.method=="PUT"){
        const id=req.url.split('/')[2];
        updateBook(req,res,id);
    
    }
    else if(req.url?.match(/\/books\/([0-9]+)/)&&req.method=="DELETE"){
        const id=req.url.split('/')[2];
        deleteBook(req,res,id);
    
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({message:'Route Not Found'}));
    }

})
server.listen(3000,()=>{
    console.log("Server Listening");
    
})