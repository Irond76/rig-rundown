const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema({
    brand: {type: String, required:true },
    model: {type: String, required:true},
    serialNumber: {type: String, required:true},
    year: {type: String, required:true},
    color: {type: String, required:true},
    image: {type: String, required:true},
    details: {type: String, required:true}
}, {
    timestamps: true
});

const Gear = mongoose.model("Gear", gearSchema);

module.exports = Gear;