const mongoose = require("mongoose");

const UserRegisterSchema = mongoose.Schema({
  id: {
    type: String, required: true,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  status: {
    type: String,
  },
  userAddress: {
    street: { type: String },
    city: { type: String },
    postCode: { type: String },
    country: { type: String },
  }
});

var RegisterModel = mongoose.model("register", UserRegisterSchema);
module.exports = RegisterModel;
