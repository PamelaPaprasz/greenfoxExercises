'use strict';


// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var star = '*';
var paddingSpace = ' ';
var lineCount = 29;

for (var i = 0; i < lineCount; i++){
    console.log(paddingSpace.repeat(lineCount-(i)) + star);
    star += '**';
};
