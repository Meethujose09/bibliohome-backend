const express = require("express");
const router = express.Router();
const { getBooks, createBook, searchBook } = require('../controller/BookController.js');

// to view all the books
router.get('/', getBooks);


// to create a book
router.post("/", createBook);

// Search all books
router.get('/searchBook/:id', searchBook);

module.exports = router;