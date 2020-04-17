
'use strict';
require('dotenv').config();
const pg = require('pg');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
app.use(cors());
const client = new pg.Client(process.env.DATABASE_URL);

const weatherHandler = require('./modules/weather');
const locationHandler = require('./modules/locations');
const movieHandler= require('./modules/movies');
const trailsHandler = require('./modules/trails');
const yelpHandler=require('./modules/yelp');
// const handler = require('./modules/');

// Route Definitions
app.get('/weather', weatherHandler);
app.get('/trails', trailsHandler);
app.get('/location', locationHandler);
app.get('/yelp', yelpHandler);
app.get('/movies', movieHandler);
// app.use('*', handler);


client.on('error', err => {
  throw new Error(err);
});

client
  .connect()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`my server is up and running on port ${PORT}`)
    );
  })
  .catch((err) => {
    throw new Error(`startup error ${err}`);
  });
