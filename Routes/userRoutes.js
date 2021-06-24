const express = require("express");
const router = express();
const userControllers = require("../Controller/userController");
// const 

router.post("/signup", userControllers.Signup);
router.post("/login", userControllers.Login);

module.exports = router;