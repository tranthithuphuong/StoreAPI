const express = require("express");
const router = express.Router();
const {
  readSanPham
} = require("../controllers/sanPham");

router.get("/sanPham", readSanPham); 

module.exports = router;