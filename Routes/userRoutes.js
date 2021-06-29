const express = require("express");
const router = express();
const userControllers = require("../Controller/userController");

router.post("/signup", userControllers.Signup);
router.post("/login", userControllers.Login);
router.get("/getbookinginfo/:movieID", userControllers.getshowdetails);
router.get("/getAllMovies", userControllers.getAllMovies);
router.get("/movie/:id", userControllers.getMoviebyId);
router.post("/name", userControllers.getResultByName);
module.exports = router;
// add
