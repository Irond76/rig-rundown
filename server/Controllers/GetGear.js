const Gear = require('../models/AddGear');



const GetGear = async (req, res) => {
    const gear = await Gear.find({});
    res.send(gear);
}





module.exports = {
    GetGear,
}