const express = require("express");
const router = express();
const JWT = require("jsonwebtoken");

exports.isTokenValid = (req, res, next) =>{
    try{
    if(!req.headers.token){
    console.log("no token was send");
    return res.send(403).send("Invalid token");
    }
    const decodedToken = JWT.verify(req.headers.token,"SECRETKEY");
    if(decodedToken.email === `${req.body.email}`){
    return next();
}
    console.warn("User send suspicious Token");
    return res.status(417).send(`Please enter valid Token for ${req.body.email} user`)
} 

catch (error){
    console.error("Token Validation Failed");
    return res.status(401).send("TOKEN IS INVALID OR EXPIRED")
}

}