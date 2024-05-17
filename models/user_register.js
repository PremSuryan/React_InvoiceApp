const mongoose = require("mongoose");

const UserRegisterSchema = new mongoose.Schema({
    username: { type: String},
    phoneno: { type: String,  },
    address: { type: String, },
    email: { type: String },
    city: { type: String },
    country : { type: String },
    password:  { type: String }
});

var RegisterModel = mongoose.model("RegisterData", UserRegisterSchema);
module.exports = RegisterModel;
