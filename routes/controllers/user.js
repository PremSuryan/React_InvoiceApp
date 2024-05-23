const mongoose = require('mongoose');
let loginModel = require("../models/user_register.js");
// let RegisterModel = require("../models/user_register.js");
const router = require('../invoices.js');


//GET ALL THE INVOICES
// router.route('/getUsers').get((req,res) => {
//   RegisterModel.find(username, password)
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })


router.route("/userlogin").post((req, res) => {
    const {
        username,
        password
      } = req.body;

      const newUser = new loginModel({
        username,
        password,
      });
    
      newUser
        .save()
        .then(() => res.json("User Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    });

  
// router.post("/register",userController.register);

module.exports = router;