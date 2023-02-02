const OrderDetail = require("../models/orderDetail");

exports.readOrderDetail = async (req, res) => {
    const { id } = req.query
    OrderDetail.read(id, (err, orderDetail) => {
        if(err) {
            return res.send(err)
        }
        res.send(orderDetail);
    })
}
