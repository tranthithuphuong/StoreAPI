const SaleOff = require("../models/saleOff");

exports.readSaleOff = async (req, res) => {
    SaleOff.read((err, saleOff) => {
        if(err) {
            return res.send(err)
        }
        res.json(saleOff);
    })
}