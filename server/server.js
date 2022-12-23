const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DB = process.env.MONGO_DB_URI;
const mongoose = require('mongoose');
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.set('strictQuery', false);
const User = require('./models/User');



app.post('/login', async (req, res) => {
    const {userName, userPassword} = req.body;
    const officialUserName = await User.findOne({userName});
    const officialUserPassword = await User.findOne({userPassword});
    if (!officialUserName) {
        res.status(404).send({message: `Username: ${userName} Not Found`});
    }
    else if (!officialUserPassword) {
        res.status(404).send({message: `Password Incorrect`});
    }
    else if (officialUserName && officialUserPassword) {
        res.status(200).send({message: 'Access Granted'});
    };
});

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