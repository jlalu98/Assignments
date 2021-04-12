"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Books = require('./bookModel');
var getPostData = require("./utils").getPostData;
function getBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var books, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Books.findAll()];
                case 1:
                    books = _a.sent();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(books));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getBook(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Books.findById(id)];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        res.writeHead(404, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Product Not Found!!' }));
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(book));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getBookByAuthor(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Books.findByAuthor(id)];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        res.writeHead(404, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Product Not Found!!' }));
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(book));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, _a, title, author, price, rating, book, newBook, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getPostData(req)];
                case 1:
                    body = _b.sent();
                    _a = JSON.parse(body), title = _a.title, author = _a.author, price = _a.price, rating = _a.rating;
                    book = {
                        title: title,
                        author: author,
                        price: price,
                        rating: rating
                    };
                    return [4 /*yield*/, Books.create(book)];
                case 2:
                    newBook = _b.sent();
                    //status code 201: created
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    return [2 /*return*/, res.end(JSON.stringify(newBook))];
                case 3:
                    error_4 = _b.sent();
                    console.log(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateBook(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var findBook, body, _a, title, author, price, rating, book, updatedBook, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, Books.findById(id)];
                case 1:
                    findBook = _b.sent();
                    if (!!findBook) return [3 /*break*/, 2];
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Product Not Found!!' }));
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, getPostData(req)];
                case 3:
                    body = _b.sent();
                    _a = JSON.parse(body), title = _a.title, author = _a.author, price = _a.price, rating = _a.rating;
                    book = {
                        title: title || findBook.title,
                        author: author || findBook.author,
                        price: price || findBook.price,
                        rating: rating || findBook.rating
                    };
                    return [4 /*yield*/, Books.update(id, book)];
                case 4:
                    updatedBook = _b.sent();
                    //status code 200: updating
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return [2 /*return*/, res.end(JSON.stringify(updatedBook))];
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_5 = _b.sent();
                    console.log(error_5);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function deleteBook(req, res, id) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Books.findById(id)];
                case 1:
                    book = _a.sent();
                    if (!!book) return [3 /*break*/, 2];
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Product Not Found!!' }));
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, Books.remove(id)];
                case 3:
                    _a.sent();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "Product " + id + " removed" }));
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    getBooks: getBooks,
    getBook: getBook,
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getBookByAuthor: getBookByAuthor
};
