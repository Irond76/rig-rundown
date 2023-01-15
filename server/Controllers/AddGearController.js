const Gear = require('../models/AddGear');


const addGear = async (req, res) => {
    const {brand,model,color,serialNumber,year,type,image, details} = req.body;
    const newGear = new Gear(
        {brand, model, color, serialNumber, year, type, image, details}
    );
    await newGear.save();
    console.log(newGear);
    res.status(200).send(req.body);
};



module.exports = {
    addGear,
}