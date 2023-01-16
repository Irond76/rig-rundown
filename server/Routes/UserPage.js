const express = require('express');
const router = express.Router();
const {GetGear} = require('../Controllers/GetGear');  
const {GetSingleGear} = require('../Controllers/GetSingleGear');

router.get('/', GetGear);
router.get('/:gearID', GetSingleGear);

module.exports = router;

