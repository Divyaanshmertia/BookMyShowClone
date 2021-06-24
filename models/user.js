const mongoose = require("mongoose");
const User = new mongoose.Schema({
    firstName: {
        type: String,
        require: true

    },

    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    DOB: {
        type: Date,                    // Never use bracket 
        require: false,
    },
    phoneNumber: {
        type: Number,
        require: true,
    }

});

module.exports = mongoose.model("User", User, "User")

