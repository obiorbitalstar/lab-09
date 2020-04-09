'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');

const app = express();
const PORT = process.env.PORT || 4000;
const handler = require('./modules/handler.js');
app.use(cors());

const locationHandler = require('./modules/locations.js');

app.get('/locations',locationHandler);








// function startServer() {
//   app.listen(PORT, () => console.log(`Server up on ${PORT}`));
// }

// // Start Up the Server after the database is connected and cache is loaded
// const client = require('./client.js');

// client.connect()
//   .then(startServer)
//   .catch(err => console.error(err));
