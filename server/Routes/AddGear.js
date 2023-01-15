const express = require('express');
const router = express.Router();


const {addGear} = require('../Controllers/AddGearController');

router.post('/', addGear );


module.exports = router;