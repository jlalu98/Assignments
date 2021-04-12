import { resolve } from "node:path";

const Books=require('./bookModel');
const {getPostData}=require("./utils");
async function getBooks(req: any,res: any){
    try{
        const books= await Books.findAll()
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(books));
    }
    catch(error){
        console.log(error);
        
    }
}
async function getBook(req: any,res: any,id: any){
    try{
        const book= await Books.findById(id);
        if(!book){
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Product Not Found!!'}));
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(book));
        }
       
    }
    catch(error){
        console.log(error);
        
    }
}
async function getBookByAuthor(req: any,res: any,id: any){
    try{
        const book= await Books.findByAuthor(id);
        if(!book){
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Product Not Found!!'}));
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(book));
        }
       
    }
    catch(error){
        console.log(error);
        
    }
}
async function createBook(req: any,res: any){
    try{
        const body=await getPostData(req);
        const {title,author,price,rating}=JSON.parse(body);
            const book={
                title,
                author,
                price,
                rating
            }
            const newBook= await Books.create(book);
            //status code 201: created
            res.writeHead(201,{'Content-Type':'application/json'})
            return res.end(JSON.stringify(newBook));

        //id not passed bcz we are going to create a unique id for that we are doing to use seperate package
        //for this we use the package uuid--> npm install uuid
        // const book={
        //     title:"The Alchemist",
        //     author:"Paulo Choelho",
        //     price:"360",
        //     rating:"4.8"
        // }
        //----------------------------------
        //GETTING BODY DATA 
        // let body= "";
        // req.on('data',(chunk: { toString: () => string; })=>{
        //     // here we getbuffer that has to be converted to string
        //     body+=chunk.toString();
        // })
        // req.on('end',async ()=>{
            //creating a product model
            // const {title,author,price,rating} = JSON.parse(body);
            // const book={
            //     title,
            //     author,
            //     price,
            //     rating
            // }
            // const newBook= await Books.create(book);
            // //status code 201: created
            // res.writeHead(201,{'Content-Type':'application/json'})
            // return res.end(JSON.stringify(newBook));
       // });
        //----------------------------------
    //     //creating a product model
    //     const newBook= await Books.create(book);
    //     //status code 201: created
    //     res.writeHead(201,{'Content-Type':'application/json'})
    //     return res.end(JSON.stringify(newBook));
     }
    catch(error){
        console.log(error);
        
    }
    //line 45 to 74 can be also used while updating the product 
    //so we can create a u tility for that and use it again
}
async function updateBook(req: any,res: any,id: any){
    try{
        const findBook= await Books.findById(id);
        if(!findBook){
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Product Not Found!!'}));
        }else{
            const body=await getPostData(req);
            const {title,author,price,rating}=JSON.parse(body);
            const book={
                title:title|| findBook.title,
                author:author||findBook.author,
                price:price||findBook.price,
                rating:rating||findBook.rating
            }
            const updatedBook= await Books.update(id,book);
            //status code 200: updating
            res.writeHead(200,{'Content-Type':'application/json'})
            return res.end(JSON.stringify(updatedBook));
        }
        

     }
    catch(error){
        console.log(error);
        
    }
}
async function deleteBook(req: any,res: any,id: any){
    try{
        const book= await Books.findById(id);
        if(!book){
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Product Not Found!!'}));
        }else{
            await Books.remove(id);
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:`Product ${id} removed`}));
        }
       
    }
    catch(error){
        console.log(error);
        
    }
}


module.exports={
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getBookByAuthor
}