const express = require('express');
const app = express();
const url= require('../server/data/data-test.js');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json(url);
});



app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}...`);
});