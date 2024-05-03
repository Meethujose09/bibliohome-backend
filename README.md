
BIBLIOHOME BACKEND USING NODEJS
===============================

This is a backend application built using Node.js and Express.js framework. It connects to a MongoDB database to manage books and wishlists.
-------------------------------------------------------------------------------------------------------------------------------------------------
Installation
Clone the repository:
-------------------------------------------------------------------------------------------------------------------------------------------------

git clone https://github.com/Meethujose09/bibliohome-backend.git
Install dependencies:
-------------------------------------------------------------------------------------------------------------------------------------------------

npm install
Set up environment variables:Create a .env file in the root directory and define the following variables:
-------------------------------------------------------------------------------------------------------------------------------------------------

PORT=8000
MONGODB_URI= mongodb+srv://meethuJose09:Nkm28lk7Xn8Ze8HV@bibliohome.omomurn.mongodb.net/?retryWrites=true&w=majority
Start the server:
-------------------------------------------------------------------------------------------------------------------------------------------------

npm start


API Endpoints
================
----------------
View All Books
-------------
URL: /api/books
Method: GET
Description: Retrieves all books from the database.
Response: json

[
  {
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
  },
  {
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
  },
]

-------------------------------------------------------------------------------------------------------------------------------------------------
Add a New Book
--------------
URL: /api/books
Method: POST
Description: Adds a new book to the database.
Request Body: json

{
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
}

-------------------------------------------------------------------------------------------------------------------------------------------------
Search Books
------------
URL: /api/books/search/:id
Method: GET
Description: Searches for books by title.
Parameters:
id: Search keyword
Response: json

[
  {
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
  }
]

-------------------------------------------------------------------------------------------------------------------------------------------------
Readlist
-----------
Create a readlist
URL: /api/wishlists
Method: POST
Description: Creates a new wishlist.
Request Body: json

{
  "bookId": "606bd24efdc0493d04ae136e",
"status":'status of the book'
}

-------------------------------------------------------------------------------------------------------------------------------------------------
Get All Readlists
-----------------
URL: /api/wishlists
Method: GET
Description: Retrieves all wishlists with book details.
Response: json

[
  {
    "_id": "607123456789012345678901",
    "status":'In Progress'
    "bookId": {
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
      }
  },
]

-------------------------------------------------------------------------------------------------------------------------------------------------
View a Specific readlist
-------------------------
URL: /api/wishlists/:id
Method: GET
Description: Retrieves a specific wishlist by ID with book details.
Parameters:
id: Wishlist ID
Response: json

{
   {
    "_id": "607123456789012345678901",
    "status":'In Progress'
    "bookId": {   
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
      }
  },
}

-------------------------------------------------------------------------------------------------------------------------------------------------
Update a Readlist
------------------
URL: /api/wishlists/:id
Method: PUT
Description: Updates a specific wishlist by ID.
Parameters:
id: Wishlist ID
Request Body: json

{
  "bookId": "606bd24efdc0493d04ae136e",
      "status":'In Progress'
}

Response: json
  "  {
    "_id": "607123456789012345678901",
    "status":'In Progress'
    "bookId": {
    "Title": "Book Title 1",
    "Author": "Author Name 1",
    "ISBN": "number",
      }
  },
  
  -------------------------------------------------------------------------------------------------------------------------------------------------
Delete a from readlist
----------------------
URL: /api/wishlists/:id
Method: DELETE
Description: Deletes a specific wishlist by ID.
Parameters:
id: Wishlist ID
Response: json

{
  "message": "Wishlist deleted successfully"
}


