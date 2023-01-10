const express = require("express");
const router = express.Router();
const {
  readAccountInformation
} = require("../controllers/accountInformation");

router.get("/", readAccountInformation); 

module.exports = router;