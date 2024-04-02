const mongoose = require("mongoose");

const loginpageSchema = mongoose.Schema({
    userName: {
      type: String, required: true,
    },
    password: {
      type: String, required: true,
    }
});

var loginModel = mongoose.model("loginpage", loginpageSchema);
module.exports = loginModel;