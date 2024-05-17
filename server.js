
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");



const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDb database connection established succesfully");
});

// const location = path.join(__dirname,"./routes/loginRoutes");
// app.use(express.static(location));



// app.get("/", (req,res) => {
//   res.render("loginpage");
// })

// app.get("/register", (req,res) => {
//   res.render("register");
// })

// app.post("./register", (req, res) => {
//   // Handle registration logic here
//   res.status(200).send('User registered successfully');
// });

// const regsRouter = require("./routes/registerRoutes");
// app.use("/registerRoute", regsRouter);


const invoicesRouter = require("./routes/invoices");
const { resolve } = require("path");

app.use("/invoices", invoicesRouter);


const regsRouter = require("./routes/registerRoute");
// const { resolve } = require("path");

app.use("/register", regsRouter);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path, resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//----------
// const location = path.join(__dirname,"./routes/loginRoutes");
// app.use(express.static(location));

// app.get("/", (req,res) => {
//   res.render("loginpage");
// })

// app.get("/register", (req,res) => {
//   res.render("register");
// })
