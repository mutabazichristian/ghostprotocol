//imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const sequelize = require('./config/database');

//consts
PORT = process.env.PORT || 8081;

const app = express();
app.use(cors);

//trying the sequelize connection
sequelize.authenticate()
    .then(() => {
        console.log('connection to ghost db established..');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Ghost server is now listenting on PORT ${PORT} ...`);

        })
    })

    .catch(error => {
        console.log('Connection to ghost db failled with the following error:', error);
    }) 
