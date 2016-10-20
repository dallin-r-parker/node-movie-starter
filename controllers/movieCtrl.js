var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
      //http://localhost:3030/api/movies?page=18&pageSize=
          var page = (req.query.page || 1) / 1;
          var pageSize = (req.query.pageSize || 20) / 1;
          var startIndex = (page - 1) * pageSize;

          var first20Movies = movies.slice(startIndex, startIndex + pageSize);
          res.send(first20Movies);
    },
    getById: function(req, res, next) { //This is how params works
        var movieId = req.params.movieId;
        var movie = movies[movieId];
        var responseObj = {
          message: 'You asked for movie ID: ' + movieId,
          movie: movie
        }
        res.send(responseObj)
    },
    modify: function(req, res, next){
        //which item to modify
        //what data to chant it to
        //http://localhost:3030/api/movies/272?Worldwide_Gross=20000
        var movieId = req.params.movieId;
        for(var p in req.query){
          if(req.query.hasOwnProperty(p) && movieId[]){

          }
        }
    },
    add: function(req, res, next){
        movie.push(req.body);
        res.status(200).end();
    },
    delete: function(req, res, next){
        movies.splice(req.params.movieId, 1);
        res.status(200).end();
    }
}
