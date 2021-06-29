const User = require("../model/user");
const Movie = require("../model/movie");
const Theater = require("../model/Theater");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
// const movie = require("../model/movie");

exports.Signup = (req, res) => {
  let { firstName, lastName, email, password, DOB, phoneNumber } = req.body;
  let user = new User({
    firstName,
    lastName,
    email,
    password,
    DOB,
    phoneNumber,
  });
  user
    .save()
    .then(() => {
      const token = getToken(user);
      return res.status(200).send({ user, token });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
};

exports.Login = (req, res) => {
  let { email, Password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      console.log(user);
      console.info(`user with ${email} was found`);
      if (Password === user.Password) {
        const token = getToken(user);

        console.info("login done");
        return res.status(200).send({ user, token });
      }
      console.warn("password incorrect");
      return res.status(401).send("password was incorrect");
    })
    .catch((ERROR) => {
      console.error("user was not found");
      return res.status(404).send(`${email} doesnt exist`);
    });
  //return res.status(200).send("good");
};

exports.getshowdetails = (req, res) => {
  let { movieID } = req.params;
  movieID = mongoose.Types.ObjectId(movieID);

  Movie.find({ _id: movieID })
    .then((movie) => {
      console.info("MOVIE HAS BEEN FOUND");
      return Theater.find({ movieId: movieID })
        .then((theatre) => {
          console.info("AVALAIBLE THEATRES ARE:");
          return res.status(200).send({ movie, theatre });
        })
        .catch(() => {
          console.error("in theather error");
          return res.status(500).send("in theater error");
        });
    })
    .catch(() => {
      console.error("error has occured");
      return res.status(500).send("No theater Found");
    });
};

// get all the movies
exports.getAllMovies = (req, res) => {
  const movie = Movie.find({})
    .then((movie) => {
      console.log("All Found");
      return res.status(200).send(movie);
    })
    .catch((error) => {
      console.log("error occured");
      return res.status(500).send("Problem", error);
    });
};

exports.getMoviebyId = (req, res) => {
  let { id } = req.params;
  id = mongoose.Types.ObjectId(id);
  Movie.findOne({ _id: id })
    .then((movie) => {
      if (!movie) {
        console.error(`movie with ID: ${id} doesn't exist.`);
        return res.status(404).send(`movie with ID: ${id} doesn't exist.`);
      }
      console.info(`movie with ID: ${id} was successfully found.`);
      return res.status(200).send(movie);
    })
    .catch((error) => {
      console.error(
        `There was an error while searching for movie with ID: ${id}`
      );
      return res.status(500).send("ERROR");
    });
};

exports.getResultByName = (req, res) => {
  let { name } = req.body;
  // let { location } = req.body;

  // console.log(name);
  // console.log(req.params);
  // console.log(req.params.name);

  Movie.find({ name: name })
    .then((movie) => {
      if (movie.length > 0) {
        console.info(`movie with ID: ${name} was successfully found.`);
        return res.status(200).send(movie);
      }
      console.error(`movie with ${name} doesn't exist.`);
      return res.status(404).send(`movie with ${name} doesn't exist.`);
    })
    .catch((error) => {
      console.error(
        `There was an error while searching for movie with :${name}`
      );
      return res.status(500).send("ERROR");
    });
};

// exports.LogOut = (req,res) =>{

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
