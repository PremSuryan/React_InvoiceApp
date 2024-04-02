const router = require("express").Router();
let loginModel = require("../models/loginModel.js");
const mongoose = require('mongoose');

//GET ALL THE INVOICES
router.route("/").get((req, res) => {
  loginModel.find()
    .then((login) => res.json(login))
    .catch((err) => res.status(400).json("Error: " + err));
});