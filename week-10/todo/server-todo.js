'use strict'

const mysql = require("mysql");
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oliviero Toscani11",
  database: "todoapp"
});



conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});



app.get('/', function(req, res){
    res.sendFile(__dirname + '/todo.html');
});



app.get('/todos', function(req, res){
    var result = {};
    conn.query('SELECT * FROM todos', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result = rows;
        }
        res.send(result);
    })
});


app.get('/todos/:id', function(req, res){
    var result = {};
    conn.query('SELECT * FROM todos WHERE id =' + '\'' + req.params.id + '\'', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            result = rows;
            console.log(result);
            }
        res.send(result);
    })
});


app.put('/todos/:id', function(req, res){
    var result = {};

    conn.query('UPDATE todos SET done ="' + req.body.done +'" WHERE id="' + req.params.id + '"', function(err, rows){
        conn.query('SELECT * FROM todos', function(err, rows){
            if(err) {
                console.log("PARA", err); 
            } else {
                result = rows;
                console.log(result);
            }
            res.send(result);
        })
    })
});



app.post('/todos', function(req, res){
    var resultPost = {};
    var post  = {title: req.body.title, done:0};
    conn.query('INSERT INTO todos SET ?', post, function(err,rows){
        conn.query('SELECT * FROM todos', function(err, rows){
            if(err) {
                console.log("PARA", err); 
            } else {
                resultPost = rows;
            }
            res.send(resultPost);
        })
    })
});



app.delete('/todos/:id', function(req, res){
	var resultDel = {};
	console.log(req.params.id);
    conn.query('DELETE FROM todos WHERE id="' + req.params.id + '"', function(err, rows){
		conn.query('SELECT * FROM todos', function(err, rows){
        	if (err){
            	console.log('PARAM', err);
        	} else{
            	resultDel = rows;
				console.log(resultDel);
        	};
        	res.send(resultDel);
    	})
	})
});




app.listen(3000, function(){
    console.log('server running');
});