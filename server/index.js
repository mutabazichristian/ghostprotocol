//imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');

//consts
PORT = process.env.PORT || 8081;

const app = express();
app.use(cors);

app.listen(PORT, () => {
    console.log(`Ghost server is now listenting on PORT ${PORT} ...`);
})