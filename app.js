// require express to access the express module
var express = require('express');

// create an instance of the express app
var app = express();

// tells express where to find the HTML files
app.use(express.static(__dirname + '/views'));

// route handler for accepting requests to '/'
app.get('/', function(req, res) {
  // render the index.html file
  res.render('index.html');
  // how about res.send (writehead and end put together)
  // res.send('Hi!')
});

// create server
var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
