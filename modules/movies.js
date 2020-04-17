'use strict';
const superagent = require('superagent');
const handler =  require('./handler');

function moviesHandler(request, response) {
  const city = request.query.city;
  const key = process.env.MOVIES_API_KEY;
  superagent(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&city=${city}`)
    .then(data => {
      const moviess = data.body.results.map((movieData) => {
        return new Movies(movieData);
      });
      response.status(200).json(moviess);
    })
    .catch((error) => handler.errorHandler(error, request, response));
}
function Movies (movieData){
  this.title = movieData.title;
  this.overview = movieData.overview;
  this.average_vote = movieData.vote_average;
  this.total_votes = movieData.vote_count;
  this.image_url = movieData.poster_path;
  this.popularity = movieData.popularity;
  this.released_on = movieData.release_date;
}
module.exports = moviesHandler;
