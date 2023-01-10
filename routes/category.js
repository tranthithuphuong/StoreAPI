const express = require("express");
const router = express.Router();
const {
  readCategory
} = require("../controllers/category");

router.get("/", readCategory); 

module.exports = router;