const superagent = require('superagent');

function trailsHandler (request,response){
  const lan = request.query.latitude;
  const long = request.query.longitude;

  getTrailData(lan,long).then(trailData=>{
    response.status(200).json(trailData);
  });


}
function getTrailData(lan,long){

  superagent(`https://www.hikingproject.com/data/get-trails?lat=${lan}&lon=${long}&maxDistance=400&key=${process.env.TRAIL_API_KEY}`)
    .then ( hiking =>{
      let trailsInfo = hiking.body.trails.map(val=>{
        return new Trails(val);
      });
      return trailsInfo;
    });
}

function Trails(walks){
  this.name= walks.name;
  this.location= walks.location;
  this.length = walks.length;
  this.stars = walks.stars;
  this.starVotes= walks.starVotes;
  this.summary= walks.summary;
  this.trail_url= walks.url;
  this.conditions= walks.conditionDetails;
  this.condition_date= walks.conditionDate.substring(0,11);
  this.condition_time = walks.conditionDate.substring(11);

}


module.exports = trailsHandler;
