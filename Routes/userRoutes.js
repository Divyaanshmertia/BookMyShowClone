const express = require("express");
const router = express();
const userControllers = require("../Controller/userController");
// const 

router.post("/signup", userControllers.Signup);
router.post("/login", userControllers.Login);
router.post("/admin/AddMovie", userControllers.addMovie);
router.post("/admin/AddTheater", userControllers.AddTheater);
router.get("/getbookinginfo/:movieID", userControllers.getshowdetails)
router.get("/getAllMovies", userControllers.getAllMovies);
module.exports = router;