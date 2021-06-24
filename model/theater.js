const mongoose = require("mongoose");
const theater = new mongoose.Schema({
     
     name: {
         type:String,
         required: true,
     },

     movieName: {
         type: String,
         required: true,
     },

     timings: {
         type: Array,
         required: true,
     },

     price: {
         type: Number,
         required: true,
     },

     seatsAvailaiblity: {
         type: Number,
         required: true,
     },


});


module.exports = mongoose.model("theater", Theater, "theater");