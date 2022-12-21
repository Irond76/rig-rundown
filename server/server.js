const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Rig Rundown Server Started On Port: ${port}`)
});
