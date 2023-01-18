const express = require('express');
const router = express.Router();
const {GetGear} = require('../Controllers/GetGear');  
const {GetSingleGear, DeleteSingleGear, EditSingleGear} = require('../Controllers/GetSingleGear');


router.get('/', GetGear);
router.get('/:gearID', GetSingleGear);
router.delete('/:gearID', DeleteSingleGear);
router.patch('/:gearID', EditSingleGear);

module.exports = router;

