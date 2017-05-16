// First create a new nodejs project
// Add dependencies: express (dont forget --save option!)
// Download the assets folder from here and place it under your project
// move the index.html out to the main folder
// Create a route for getting /
// render the static index.html here:
// res.sendFile(__dirname + '/index.html');
// Add serving static assets to serve your assets folder
// Try to run your app and check the index page!
// If you see a nice page where you can test the next exercises, proceed to the next one.


// 127.0.0.1 my ip
// http://localhost:3000


'use strict'

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));
app.listen(3000);

