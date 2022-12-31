const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DB = process.env.MONGO_DB_URI;
const mongoose = require('mongoose');
const port = process.env.PORT;
mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const loginUserRoute = require('./Routes/LoginUserRoute');

app.use('/login', loginUserRoute);


const startUp = async () => {
    try {
        mongoose.connect(DB);
        app.listen(port, () => {
            console.log(`Rig Rundown Server Started On Port: ${port}\nConnected to Rig Rundown Data-Base...`)
        });
    } catch (error) {
        console.log(error);
    }
}
startUp();



