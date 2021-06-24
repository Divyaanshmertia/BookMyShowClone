const User = require("../model/user");
const Movie = require("../model/movie");
const Theater = require("../model/Theater");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const movie = require("../model/movie");

exports.Signup = (req, res) => {
    let { firstName, lastName, email, password, DOB, phoneNumber } = req.body;
    let user = new User({
      firstName,
      lastName,
      email,
        password,
        DOB,
      phoneNumber
      
    });
    user
      .save()
      .then(() => {
        const token= getToken(user)
        return res.status(200).send({ user, token })
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
      });
};

exports.Login = (req,res) => {
    let {email,Password} = req.body;
    User.findOne({email:email}).then((user) => {
         console.log(user);
         console.info(`user with ${email} was found`);
         if(Password === user.Password){
             const token = getToken(user);

             console.info("login done");
             return res.status(200).send({user,token});
         }
         console.warn("password incorrect");
         return res.status(401).send("password was incorrect")
          
    }).catch((ERROR)=>{
           console.error("user was not found")
           return res.status(404).send(`${email} doesnt exist`)
    })
    //return res.status(200).send("good");
}

exports.addMovie = (req, res) => {
    let { name, language, duration, ageBoundation, releaseDate, is3D } = req.body;
    let movie = new Movie({
        name,
        language,
        duration,
        ageBoundation,
        releaseDate,
        is3D
    })
    movie.save().then(() => {
        console.log("Movie Added Successfully");
        return res.status(200).send(movie)
    }).catch(() => {
        console.log("There was an error while adding movie");
        return res.status(500).send("Failed");
    })
}

exports.AddTheater = (req, res) => {
    let { name, movieId, timings, price, seatsAvailaiblity } = req.body
    let theater = new Theater({
        name,
        movieId,
        timings,
        price,
        seatsAvailaiblity,
    })
  theater.save()
    .then(() => {
        console.log("Theater data was added successfully");
        return res.status(200).send(theater);

    }).catch(() => {
        console.error("there was a problem while adding details");
        return res.status(500).send("data entry invalid");
    })
}


// exports.LogOut = (req,res) =>{

// }

const getToken = (user) => {
    return token = JWT.sign(
      {
        email: user.email,
        
      },
      "JIETSecretKey",
      {
        expiresIn: "1h",
      }
    );
  }
