var express = require('express');
var app = express();
var path = require('path');

var PORT = process.argv[2] || 3000

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/index.html'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
  console.log('listening on port:', PORT);
});
