const Gear = require('../models/AddGear');



const GetSingleGear = async (req, res) => {
    const id = req.params.gearID;
    console.log(id)
    const singleGearItem = await Gear.findOne({_id:id});
    res.status(200).send(singleGearItem)
}
const DeleteSingleGear = async (req, res) => {
    const id = req.params.gearID;
    console.log(id)
    const singleGearItem = await Gear.findOneAndDelete({_id:id});
    res.status(200).send({msg: `deleted item ${singleGearItem}`});
}





module.exports = {
    GetSingleGear,
    DeleteSingleGear
}