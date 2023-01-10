const Product = require("../models/product");

exports.readProduct = async (req, res) => {
    Product.read((err, product) => {
        if(err) {
            return res.send(err)
        }
        res.json(product);
    })
}