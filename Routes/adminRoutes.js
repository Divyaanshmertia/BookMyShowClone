const express = require("express");
const router = express();
const adminControllers = require("../Controller/adminController");
router.post("/admin/AddMovie", adminControllers.addMovie);
router.post("/admin/AddTheater", adminControllers.AddTheater);
module.exports = router;
