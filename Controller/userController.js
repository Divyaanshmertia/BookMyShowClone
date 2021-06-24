const User = require("../models/user");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken")

exports.userSignup = (req,res)=>{
    let{firstName, lastName, email, Password} = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        Password,
    });

    user.save().then(()=>{
        const token = getToken(user);
        return res.status(200).send({user, token});
    }).catch((ERROR) =>{
        console.error("error");
        res.status(500).send("ERROR")
    })

}


exports.Login = (req,res) => {
    let {email,Password} = req.body;
    User.findOne({email:email}).then((user) => {
         //console.log(user);
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



// exports.LogOut = (req,res) =>{

// }


exports.Task



const getToken = (user) =>{
    return JWT.sign(
        {
            email: user.email,
        },
        "SECRETKEY",
        {
            expiresIn:"1h",
        }
    )
}