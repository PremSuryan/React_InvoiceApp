const router = require("express").Router();
let UserRegisterSchema = require("../models/user_register.js");
const mongoose = require('mongoose');
const userController = require("./controllers/user");


//GET ALL THE INVOICES
router.route("/register").get((req, res) => {
    res.render("registor");
});
  
router.post("/register",userController.register);

module.exports = router;


// app.post('/register', (req, res) => {
//     const register = req.body;
//     // Here you can save the user data to your database or perform any other necessary actions
//     console.log(register); // Just for testing, you can remove this line
  
//     // Send a response indicating success
//     res.status(200).json({ message: 'User registered successfully' });
//   });

// router.route("/register").get((req, res) => {
//     UserRegisterSchema.find()
//     .then((register) => res.json(register))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
  