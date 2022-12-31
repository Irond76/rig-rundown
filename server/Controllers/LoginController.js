const User = require('../models/User');


const Login = async (req, res) => {
    const {userName, userPassword} = req.body;
    const officialUserName = await User.findOne({userName});
    const officialUserPassword = await User.findOne({userPassword});
    if (!officialUserName) {
        res.status(404).send({message: `Username: ${userName} Not Found`});
    }
    else if (!officialUserPassword) {
        res.status(404).send({message: `Password Incorrect`});
    }
    else if (officialUserName && officialUserPassword) {
        res.status(200).send(officialUserName)
    };

};

module.exports = {
    Login
}