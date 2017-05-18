'use strict'

const mysql = require("mysql");
const express = require('express');

const app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oliviero Toscani11",
  database: "bookstore"
});

// conn.connect(function(err){
//   if(err){
//     console.log("Error connecting to Db");
//     return;
//   }
//   console.log("Connection established");
// });

const country = 'USA';
const city = 'Atlanta';
const query =  {
    sql: "SELECT * FROM author WHERE country = ? AND home_city = ?", 
    values: [country, city]    
}

app.get('/', function get(req, res){
    var result = [];
    console.log(result);
    conn.query(query, function(err,rows){
        if (err){
            console.log('PARAM', err);
        } else{
            rows.forEach(row=>{
                result.push(row.aut_name);
            });
        }
        res.send(result);
        // conn.query("SELECT * FROM author;",function(err,rows){
        // console.log("Data received from Db:\n");
        // console.log(row,aut_name);
    });    
});

app.listen(3000, function(){
    console.log('server running');
});

// 
// const country = 'USA';
// const city = 'Atlanta';
// const query =  "SELECT * FROM author WHERE country = ? AND home_city = ?"; 
// 
// conn.query(query, [country, city], function(err,rows){
// // conn.query("SELECT * FROM author;",function(err,rows){
//     console.log("Data received from Db:\n");
//     console.log(row,aut_name);
// });

// conn.end();
