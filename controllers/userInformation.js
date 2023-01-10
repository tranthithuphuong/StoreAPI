const UserInformation = require("../models/userInformation");

exports.readUserInformation = async (req, res) => {
    UserInformation.read(req.body.id, (err, userInformation) => {
        if(err) {
            return res.send(err)
        }
        res.json(userInformation);
    })
}