const router = require("express").Router();
let UserRegisterSchema = require("../models/user_register.js");
const mongoose = require('mongoose');

//GET ALL THE INVOICES
router.route("/register").get((req, res) => {
    UserRegisterSchema.find()
    .then((register) => res.json(register))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post('/register', (req, res) => {
    const register = req.body;
    // Here you can save the user data to your database or perform any other necessary actions
    console.log(register); // Just for testing, you can remove this line
  
    // Send a response indicating success
    res.status(200).json({ message: 'User registered successfully' });
  });
  