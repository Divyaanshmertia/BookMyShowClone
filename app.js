//API for BookMyShow Clone Project MADE by : Harsh Sunil Jain, Divyaansh Mertia, Govind Bissa//

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


//Connecting Database to API to store data  
mongoose.connect("mongodb://localhost:27017/BookMyShowClone",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
    .then(()=>{
        console.info("[MongoDB Connected Succesfully]")
    })

    .catch((error)=>{
        console.error("There was error while connecting to DATABASE");
    })


app.use(userRoutes);
    
    
    //Port Number for API calling
    const PORT = 9160;
    app.listen(PORT,()=>{
        console.log(`Connection Established with port number: ${PORT}`);
    })