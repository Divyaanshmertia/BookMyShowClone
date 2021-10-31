const mongoose = require("mongoose");
const Stream = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  ageBoundation: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
  BannerLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: [String],
    required: false,
  },
  Cast: {
    type: [String],
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", Movie, "movie");
