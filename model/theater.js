const mongoose = require("mongoose");
const Theater = new mongoose.Schema({
     
     name: {
         type:String,
         required: true,
     },

    movieId: {
        type: mongoose.Types.ObjectId,
        required:true,
    },
     timings: {
         type: String,
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


module.exports = mongoose.model("Theater", Theater, "Theater");