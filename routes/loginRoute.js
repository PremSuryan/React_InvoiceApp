const router = require("express").Router();
// let loginModel = require("../models/loginModel.js");
const mongoose = require('mongoose');
const userController = require("./controllers/user");


//GET ALL THE INVOICES

router.route("/").get((req, res) => {
  res.render("loginpage");
});

router.post("/loginpage",userController.loginpage);

module.exports = router;