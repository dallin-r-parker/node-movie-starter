var express = require('express');
var bodyParser = require('body-parser');
var movieCtrl = require('./controllers/movieCtrl');

var app = express();
app.use(bodyParser.json());
app.put('/api/movies/:movieId', movieCtrl.modify )
app.get('/api/movies', movieCtrl.get);
app.get('/api/movies/:movieId', movieCtrl.getById) //this is how params works
app.put('/api/movies', movieCtrl.modify);
app.post('/api/movies', movieCtrl.add);
app.delete('/api/movies/:moveId', movieCtrl.delete);


var port = 3030;
app.listen(port, function(){
    console.log('listening on ' + port);
})
