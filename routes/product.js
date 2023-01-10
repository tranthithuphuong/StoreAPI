const express = require("express");
const router = express.Router();
const {
  readProduct
} = require("../controllers/product");

router.get("/", readProduct); 

module.exports = router;