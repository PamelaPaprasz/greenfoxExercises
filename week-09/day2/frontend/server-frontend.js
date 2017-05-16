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
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
    var number = req.query.input;
    console.log('params', req.query);
    
    if (number){
        res.send({
            "received": parseInt(number),
            "result": number *2
        });
    } else{
        res.send({
            "error": "Please provide an input!"    
        })
    }
});
    
app.get('/greeter', function(req, res){
    var name = req.query.name;
    var title = req.query.title;
    
    if (name && title){
        res.send({
            "welcome_message": "Oh, hi there " + name + ", my dear " + title + "!"
        })
    } else if (name === undefined){
        res.send({
            "error": "Please provide a name!"
        })
    } else if (title === undefined){
        res.send({
            "error": "Please provide a title!"
        })
    }
    
});
    
app.get('/appenda/{appendable}', function(req, res){
    var aLessWord = req.query.appendable;
    
    if (aLessWord){
        res.send({
            "appended": {aLessWord} + "a"
        })
    } else{
        res.send({
            "error": "404"
        })
    } 
    
});

app.listen(8080);
