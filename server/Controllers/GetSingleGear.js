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
const EditSingleGear = async (req, res) => {
    console.log('user made edit request')
    const id = req.params.gearID;
    console.log(id)
    const singleGearItem = await Gear.findOneAndUpdate({_id:id}, req.body);
    res.status(200).send(singleGearItem);
}





module.exports = {
    GetSingleGear,
    DeleteSingleGear,
    EditSingleGear
}