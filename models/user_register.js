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


// UserRegisterSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   });
  
//   UserRegisterSchema.methods.comparePassword = async function (candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
//   };