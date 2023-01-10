const AccountInformation = require("../models/accountInformation");

exports.readAccountInformation = async (req, res) => {
    AccountInformation.read(req.body.id, (err, accountInformation) => {
        if(err) {
            return res.send(err)
        }
        res.json(accountInformation);
    })
}