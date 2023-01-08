const express = require("express");
const router = express.Router();
const {
  readUserInformation
} = require("../controllers/userInformation");

router.get("/userInformation", readUserInformation); 

module.exports = router;