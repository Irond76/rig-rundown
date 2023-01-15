const express = require('express');
const router = express.Router();
const {GetGear} = require('../Controllers/GetGear');  

router.get('/', GetGear);

module.exports = router;

