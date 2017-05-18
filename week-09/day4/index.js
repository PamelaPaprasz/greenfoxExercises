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
// 
// const country = 'USA';
// const city = 'Atlanta';
// const query =  {
//     sql: "SELECT * FROM author WHERE country = ? AND home_city = ?", 
//     values: [country, city]    
// }
// 
// app.get('/', function get(req, res){
//     var result = [];
//     console.log(result);
//     conn.query(query, function(err,rows){
//         if (err){
//             console.log('PARAM', err);
//         } else{
//             rows.forEach(row=>{
//                 result.push(row.aut_name);
//             });
//         }
//         res.send(result);
        // conn.query("SELECT * FROM author;",function(err,rows){
        // console.log("Data received from Db:\n");
        // console.log(row,aut_name);
//     });    
// });

app.get('/', function get(req, res){
    var htmlList = '<ul>';
    var endHtml = '</ul>';
    
    conn.query("SELECT book_name FROM book_mast;", function(err,rows){
        if (err){
            console.log('PARAM', err);
        } else{
            rows.forEach(row=>{
                htmlList += '<li>' + row.book_name + '</li>';
            });
        } htmlList += endHtml;
        res.send(htmlList);
    });    
});

app.get('/books', function get(req, res){
    var tableStart = '<table>';
    var tableEnd = '</table>';
    
    conn.query("SELECT book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_price FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id;", function(err,rows){
        if (err){
            console.log('PARAM', err);
        } else{
            rows.forEach(row=>{
                tableStart += '<tr> <td>' + row.book_name + '</td>';
                tableStart += '<td>' + row.aut_name + '</td>';
                tableStart += '<td>' + row.cate_descrip + '</td>';
                tableStart += '<td>' + row.pub_name + '</td>';
                tableStart += '<td>' + row.book_price + '</td> </tr>' ;
            });
        } tableStart += tableEnd;
        res.send(tableStart);
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