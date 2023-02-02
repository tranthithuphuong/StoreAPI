const express = require("express");
const router = express.Router();
const {
    readOrderDetail
} = require("../controllers/orderDetail");

router.get("/", readOrderDetail)


module.exports = router;