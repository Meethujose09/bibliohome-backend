const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book.routes.js");
const wishlistRoute = require("./routes/wishlist.routes.js");
const app = express();
const cors = require('cors');




// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Enable CORS for all routes
app.use(cors());

// routes
app.use("/api/books", bookRoute);
app.use("/api/wishlist", wishlistRoute);



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://meethuJose09:Nkm28lk7Xn8Ze8HV@bibliohome.omomurn.mongodb.net/?retryWrites=true&w=majority&appName=biblioHome"
      
    );
    app.listen(8050, () => console.log("Server started on port 8050"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
module.exports = app;


  