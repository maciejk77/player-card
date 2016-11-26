var express = require('express');
var app = express();
var data = require('./public/data/player-stats');

app.get('/', function (req, res) {
  res.send(data);
})

app.get('/:playerName', function(req, res) {
  // Change to more elegant for ...in loop?
  for(var i=0; i<data.players.length; i++) {
    if(data.players[i].player.name.last === req.params.playerName) {
      res.send(data.players[i]);
    }
  } 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
