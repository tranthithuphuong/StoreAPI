const express = require("express");
const router = express.Router();
const {
  readSaleOff
} = require("../controllers/saleOff");

router.get("/", readSaleOff); 

module.exports = router;