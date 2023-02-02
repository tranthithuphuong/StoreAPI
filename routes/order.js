const express = require("express");
const router = express.Router();
const {
    readOrder,
  createOrder
} = require("../controllers/order");

router.get("/", readOrder)
router.post("/create", createOrder); 

module.exports = router;