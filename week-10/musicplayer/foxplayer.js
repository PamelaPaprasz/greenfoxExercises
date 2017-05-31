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



app.get('/playlists', function(req, res){
    conn.query('SELECT * FROM playlists', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result1 = rows;
			console.log(result1);
        };
        res.send(result1);
    });
});



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

// 
// app.get('/playlists-tracks/:favorites', function(req, res){
//     conn.query('SELECT * FROM tracks INNER JOIN connection ON tracks.id = connection.track_id WHERE playlist_name = "Favorites"', function(err, rows){
//         if (err){
//             console.log('PARAM', err);
//         } else{
//             result = rows;
//         };
//         res.send(result);
//     });
// });


app.get('/playlists-tracks/:playlistName', function(req, res){
    // console.log(req.params.playlistName);
    conn.query('SELECT * FROM tracks INNER JOIN connection ON tracks.id = connection.track_id WHERE playlist_name = "' + req.params.playlistName + '"', function(err, rows){
        // console.log(rows);
        if (err){
            console.log('PARAM', err);
        } else{
            result = rows;
        };
        res.send(result);
    });
});



app.get('/playlists-connection/', function(req, res){
    conn.query('SELECT * FROM connection', function(err, rows){
        if (err){
            console.log('PARAM', err);
        } else{
            result = rows;
        };
        res.send(result);
    });
});



app.post('/playlists-connection', function(req, res){
    var resultPost = {};
    console.log(req.body.title);
    var recentSongId = req.body.recentSong.id
    console.log(recentSongId);
    
    var post  = {playlist_name: req.body.title, track_id: recentSongId};
    console.log(post);
    
    conn.query('INSERT IF NOT EXISTS INTO connection SET ?', post, function(err,rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            resultPost = rows;
        }
        res.send();
    })
});



app.delete('/playlists/:id', function(req, res){
	var resultDel = {};
	console.log(req.params.id);
    conn.query('DELETE FROM playlists WHERE id="' + req.params.id + '"', function(err, rows){
		conn.query('SELECT * FROM playlists', function(err, rows){
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



app.post('/playlists', function(req, res){
    var resultPost = {};
    var post  = {title: req.body.title, system:0};
    conn.query('INSERT INTO playlists SET ?', post, function(err,rows){
        conn.query('SELECT * FROM playlists', function(err, rows){
            if(err) {
                console.log("PARA", err); 
            } else {
                resultPost = rows;
                console.log(resultPost);
            }
            res.send(resultPost);
        })
    })
});



app.listen(3000, function(){
    console.log('server running');
});