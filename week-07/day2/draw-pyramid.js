'use strict';

var lineCount = 4;

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

for (var i = 0; i < lineCount; i++){
    console.log(paddingSpace.repeat(lineCount-(i)) + star + paddingSpace.repeat(lineCount-(i)));
    star += '**';
};
