const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const DB = process.env.MONGO_DB_URI;
const mongoose = require('mongoose');
const port = process.env.PORT;
mongoose.set('strictQuery', false);
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.API_SECRET,
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
const loginUserRoute = require('./Routes/LoginUserRoute');
const addGearRoute = require('./Routes/AddGear');
const userRoute = require('./Routes/UserPage');

app.use('/login', loginUserRoute);
app.use('/add-gear', addGearRoute);
app.use('/user', userRoute);

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



