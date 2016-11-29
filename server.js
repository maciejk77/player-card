var express = require('express');
var app = express();
var data = require('./public/data/player-stats');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send(data);
})

app.get('/:playerName', function(req, res) {
  data.players.map(function(key, value) {
    if(data.players[value].player.name.last === req.params.playerName) {
      res.send(data.players[value]);
    }
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
