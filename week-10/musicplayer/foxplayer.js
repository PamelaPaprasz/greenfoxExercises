'use strict'

const mysql = require("mysql");
const bodyParser = require('body-parser');
const express = require('express');

var result = {};
var result1 = {};

const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oliviero Toscani11",
  database: "foxplayer"
});


conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});


app.get('/', function(req, res){
    res.sendFile(__dirname + '/foxplayer.html');
});


// app.get('/playlists', function(req, res){
//     res.send(playlists);
// });

app.get('/playlists', function(req, res){
    conn.query('SELECT title FROM playlists', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result1 = rows;
			console.log(result1);
        };
        res.send(result1);
    });
});


// app.get('/playlists-tracks/', function(req, res){
//     res.send(tracks);
// });

app.get('/playlists-tracks/', function(req, res){
    conn.query('SELECT * FROM tracks', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result = rows;
        };
        res.send(result);
    });
});


app.listen(3000, function(){
    console.log('server running');
});