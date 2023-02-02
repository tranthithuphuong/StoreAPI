const express = require("express");
const router = express.Router();
const {
  readProduct,
  readProductByID,
  readNewProduct,
  readProductByCategory
} = require("../controllers/product");

router.get("/", readProduct); 
router.get("/item/:id", readProductByID)
router.get("/new", readNewProduct)
router.get("/productCate", readProductByCategory)

module.exports = router;