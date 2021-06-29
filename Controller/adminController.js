const Movie = require("../model/movie");
const Theater = require("../model/Theater");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
exports.addMovie = (req, res) => {
  let {
    name,
    language,
    duration,
    ageBoundation,
    releaseDate,
    is3D,
    link,
    BannerLink,
    description,
    location,
  } = req.body;
  let movie = new Movie({
    name,
    language,
    duration,
    ageBoundation,
    releaseDate,
    link,
    is3D,
    link,
    BannerLink,
    description,
    location,
  });
  movie
    .save()
    .then(() => {
      console.log("Movie Added Successfully");
      return res.status(200).send(movie);
    })
    .catch(() => {
      console.log("There was an error while adding movie");
      return res.status(500).send("Failed");
    });
};

exports.AddTheater = (req, res) => {
  let { name, movieId, timings, price, seatsAvailaiblity } = req.body;
  movieId = mongoose.Types.ObjectId(movieId);
  let theater = new Theater({
    name,
    movieId,
    timings,
    price,
    seatsAvailaiblity,
  });
  theater
    .save()
    .then((theater) => {
      console.log("Theater data was added successfully");
      return res.status(200).send(theater);
    })
    .catch(() => {
      console.error("there was a problem while adding details");
      return res.status(500).send("data entry invalid");
    });
};

const getToken = (user) => {
  return (token = JWT.sign(
    {
      email: user.email,
    },
    "JIETSecretKey",
    {
      expiresIn: "1h",
    }
  ));
};
