const router = require("express").Router();
let RegisterModel = require("../models/user_register.js");
const mongoose = require('mongoose');


//GET ALL THE INVOICES
router.route("/userDetails").post((req, res) => {
    const {
        username,
        phoneno,
        address,
        email,
        city,
        country,
        password
      } = req.body;

      const newUser = new RegisterModel({
        username,
        phoneno,
        address,
        email,
        city,
        country,
        password,
      });
    
      newUser
        .save()
        .then(() => res.json("User Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    });

  
// router.post("/register",userController.register);

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
  