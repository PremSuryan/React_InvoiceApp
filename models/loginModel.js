const mongoose = require("mongoose");
let RegisterModel = require("../models/invoice.model.js");

const loginpageSchema = mongoose.Schema({
  username: {
      type: String,
    },
    password: {
      type: String, 
    }
});

router.route('/:id').get((req,res) => {
  RegisterModel.findById(req.params.id)
  .then(username, password => res.json(username, password ))
  .catch(err => res.status(400).json('Error: ' + err));
});


var loginModel = mongoose.model("loginpage", loginpageSchema);
module.exports = loginModel;