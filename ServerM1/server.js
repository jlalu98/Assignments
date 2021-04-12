"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//const book=require('./db.json');
var _a = require('./bookController'), getBooks = _a.getBooks, getBook = _a.getBook, createBook = _a.createBook, updateBook = _a.updateBook, deleteBook = _a.deleteBook, getBookByAuthor = _a.getBookByAuthor;
var server = http.createServer(function (req, res) {
    var _a, _b, _c, _d;
    if (req.url == "/books" && req.method == "GET") {
        getBooks(req, res);
    }
    else if (((_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/\/books\/([0-9]+)/)) && req.method == "GET") {
        var id = req.url.split('/')[2];
        getBook(req, res, id);
    }
    else if (((_b = req.url) === null || _b === void 0 ? void 0 : _b.match(/\/books\/\w+/)) && req.method == "GET") {
        var author = req.url.split('/')[2];
        getBookByAuthor(req, res, author);
    }
    else if (req.url == "/books" && req.method == "POST") {
        createBook(req, res);
    }
    else if (((_c = req.url) === null || _c === void 0 ? void 0 : _c.match(/\/books\/([0-9]+)/)) && req.method == "PUT") {
        var id = req.url.split('/')[2];
        updateBook(req, res, id);
    }
    else if (((_d = req.url) === null || _d === void 0 ? void 0 : _d.match(/\/books\/([0-9]+)/)) && req.method == "DELETE") {
        var id = req.url.split('/')[2];
        deleteBook(req, res, id);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
});
server.listen(3000, function () {
    console.log("Server Listening");
});
