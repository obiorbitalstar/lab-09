' user strict';

function render (data,response){

  response.status(200).json(data);
}

function notFoundHandler(request,response){
  response.status(404).send('Hmmm, not quit my tempo');

}

function errorHandler(error,request,response){

  response.status(500).send(error);

}


module.exports = {
  errorHandler :errorHandler ,
  notFoundHandler : notFoundHandler,
  render:render

};
