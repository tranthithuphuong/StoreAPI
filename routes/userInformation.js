const express = require("express");
const router = express.Router();
const {
  readUserInformation
} = require("../controllers/userInformation");

router.get("/", readUserInformation); 

module.exports = router;