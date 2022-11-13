require('dotenv').config();
const express = require('express');
const app = express();
const notFoundMiddleware = require('../server/middleware/notFound.js');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());
// app.use(notFoundMiddleware);


app.get('/', (req, res) => {
    res.status(200).send(`<h1>Rig Rundown Server</h1><a href= '/api'>API</a>`)
});

app.get('/api', (req, res) => {
    res.status(200).json([{id: 1,brand: "Fender", model: "Telecaster"},{id: 2,brand: "Gibson", model: "Les Paul"}]);
});


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    };
};

start();