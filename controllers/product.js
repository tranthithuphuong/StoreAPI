const Product = require("../models/product");

exports.readProductByID = async (req, res) => {
    const { id } = req.params
    Product.readById(id, (err, product) => {
        if(err) {
            return res.send(err)
        }
        res.json(product)
    })
}

exports.readProduct = async (req, res) => {
    Product.read((err, product) => {
        if(err) {
            return res.send(err)
        }
        res.json(product);
    })
}

exports.readNewProduct = async (req, res)  => {
    Product.readNew((err, product) => {
        if(err) {
            return res.send(err)
        }
        res.json(product)
    })
} 

exports.readProductByCategory = async (req, res) => {
    let { id } = req.query
    Product.readByCategory(id,(err, product) => {
        if(err) {
            return res.send(err)
        }
        res.json(product)
    })
}