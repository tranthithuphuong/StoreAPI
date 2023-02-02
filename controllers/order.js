const Order = require("../models/order");

exports.createOrder = async (req, res) => {
    console.log(req.body)
    Order.create(req.body, (err, order) => {
        if(err) {
            return res.send(err)
        }
        res.send(order);
    })
}

exports.readOrder = async (req, res) => {
    const { id } = req.query
    console.log(id)
    Order.read(id, (err, order) => {
        if(err) {
            return res.send(err)
        }
        res.json(order);
    }) 
}