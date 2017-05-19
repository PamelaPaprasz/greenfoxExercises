'use strict'

const mysql = require("mysql");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var result = {'posts': 0};
app.use(cors());
app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oliviero Toscani11",
  database: "reddit"
});


conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get('/', function(req, res){
    res.send('hello word');
});

app.get('/posts', function(req, res){
    conn.query('SELECT * FROM posts', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result.posts = rows;
        };
        res.send(result);
    });
});

// app.post('/posts', function(req, res){
//     conn.query('INSERT INTO reddit (href, timestamp, title) VALUES ("' + req.body.url + '", "' + timestamp + '", "' + req.body.title'" )', )
// })


app.listen(3000, function(){
    console.log('server running');
});
