
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const RegisterModel = require('./models/user_register'); 



const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb://localhost:27017/users', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDb database connection established succesfully");
});


const invoicesRouter = require("./routes/invoices");
const { resolve } = require("path");

app.use("/invoices", invoicesRouter);

// const userlogin = require("./routes/loginRoute")
// app.use("/login", userlogin);



const regsRouter = require("./routes/registerRoute");
// const { resolve } = require("path");

app.use("/register", regsRouter);



const loginRouter = require("./routes/registerRoute");
// const { resolve } = require("path");

app.use("/", loginRouter);
// -----

// app.post("/getusers",async(req,res)=>{
//   const {username , password} = req.body

//   const data ={
//     username : username,
//     password: password
//   }
//   await RegisterModel.insertMany({data})
// })
//user login 
// app.post('/userlogin', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find the user by username
//     const user = await RegisterModel.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid username or password' });
//     }

//     // If login is successful
//     res.json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });


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


// app.post('/login/userlogin', async (req, res) => {
  //   const { username, password } = req.body;
  //   try {
  //     const user = await RegisterModel.findOne({ username });
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     // Assuming you store hashed passwords
  //     const isPasswordCorrect = await user.comparePassword(password); // Adjust according to your password hashing strategy
  //     if (!isPasswordCorrect) {
  //       return res.status(401).json({ message: 'Invalid username or password' });
  //     }
  //     res.json({ message: 'Login successful', user });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error', error });
  //   }
  // });



