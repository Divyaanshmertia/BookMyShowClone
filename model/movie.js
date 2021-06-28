const mongoose = require("mongoose");
const Movie = new mongoose.Schema({
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

	releaseDate: {
		type: Date,
		required: true,
	},
	is3D: {
		type: Boolean,
		default: false,
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
});

module.exports = mongoose.model("movie", Movie, "movie");
