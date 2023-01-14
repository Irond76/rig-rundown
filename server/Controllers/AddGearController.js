const Gear = require('../models/AddGear');

const addGear = (req, res) => {
    const {brand,model,color,serialNumber,year,type,image,details} = req.body;
    res.status(200).send(req.body);
};



module.exports = {
    addGear,
}