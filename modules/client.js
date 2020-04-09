'user strict';
const pg = require('pg');
require('dotenv').config();

const client = new pg.Client(process.env.DATABAASE_URL);
client.on('error', err => {console.error(err);});

module.exports = client;
