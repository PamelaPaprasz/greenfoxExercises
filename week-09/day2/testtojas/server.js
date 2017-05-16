'use strict'

// 127.0.0.1 my ip
// http://localhost:3000
// http://localhost:3000/
// var http = require('http')
// 
// var server = http.createServer(hahndleRequest);
// 
// function hahndleRequest(request, response){
//     response.end('Hello');
// }
// 
// server.liset(3000);

var express = require('express');
var five = require('five');

var app = express();

app.get('/', function(req, res){
    // res.send(<a>'ez itt a mainpage'</a>);
    res.send({
        name: 'Bub',
        age: 12,
        gender: 'male',
        banon: req.query.banon // a banon legyen a queryben szereplo banon ertek
    });
});

app.get('/five/:lang', function(req, res){
    
    var lang = req.params.lang;
    var fiveFunc = five[lang];
    res.send(fiveFunc())
    // res.send(five.kinglon());
});
// 
// app.get('/five', function(req, res){
//     
//     var lang = req.query.lang || 'kinglon';
//     var fiveFunc = five[lang];
//     res.send(fiveFunc())
//     // res.send(five.kinglon());
// });

app.listen(3000);