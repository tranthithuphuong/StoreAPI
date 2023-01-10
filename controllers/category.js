const Category = require("../models/category");

exports.readCategory = async (req, res) => {
    Category.read((err, category) => {
        if(err) {
            return res.send(err)
        }
        res.json(category);
    })
}