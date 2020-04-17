'use strict';
const superagent = require('superagent');
const handler = require('./handler');


function yelpHandler(request, response) {
  const city = request.query.city;
  const key = process.env.YELP_API_KEY;
  superagent(
    `https://api.yelp.com/v3/businesses/search?location=${city}`
  )
    .set('Authorization', `Bearer ${key}`)
    .then((trialData) => {
      const YData = trialData.body.businesses.map((data) => {
        return new Yelp(data);
      });
      response.status(200).json(YData);
    })
    .catch((error) => handler.errorHandler(error, request, response));
}
function Yelp (data) {
  this.name = data.name;
  this.image_url = data.image_url;
  this.price = data.price;
  this.rating = data.rating;
  this.url = data.url;
}
module.exports = yelpHandler;
