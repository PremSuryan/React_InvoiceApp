const mongoose = require("mongoose");

const UserRegisterSchema = new mongoose.Schema({
    username: String,
    phoneno: String,
    address: String,
    email: String,
    city: String,
    country : String,
    password:  String
})

var RegisterModel = mongoose.model("users", UserRegisterSchema);
module.exports = RegisterModel;