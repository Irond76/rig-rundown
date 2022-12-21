const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.post('/login', (req, res) => {
    console.log('request hit your server');
});

app.listen(port, () => {
    console.log(`Rig Rundown Server Started On Port: ${port}`)
});
