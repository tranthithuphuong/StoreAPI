const SanPham = require("../models/sanPham");

exports.readSanPham = async (req, res) => {
    SanPham.read((err, sanPham) => {
        if(err) {
            return res.send(err)
        }
        res.json(sanPham);
    })
}