const mongoose = require("mongoose");
const User = new mongoose.Schema({
     
     firstName: {
         type:String,
         required: true,
     },

     lastName: {
         type: String,
         required: true,
     },

     email: {
         type: String,
         required: true,
     },

     passWord: {
         type: String,
         required: true,
     },

     DOB: {
         type: Date,
         required: true,
     },

     phoneNumber: {
         type: Number,
         required: true,
     },
});


module.exports = mongoose.model("user", User, "user");