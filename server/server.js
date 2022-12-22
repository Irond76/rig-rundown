const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.post('/login', (req, res) => {
    const data = req.body;
    if (data.userName === 'Dale'){
        console.log(data);

    }else {
        console.log('user not found')
    }
});

app.listen(port, () => {
    console.log(`Rig Rundown Server Started On Port: ${port}`)
});
