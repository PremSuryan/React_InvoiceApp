const mongoose = require('mongoose');

const db = mongoose.connection('mongodb://localhost:27017/',{
    host: "localhost",
    user: "root",
    password: "root",
    database: "InvoiceReact"
});

exports.loginpage = (req,res) => {
    const {
    userID,
    userName,
    userPhonenumber,
    userEmail
       
      } = req.body;
    
    res.send ("LoggedIn Successfuly");
}