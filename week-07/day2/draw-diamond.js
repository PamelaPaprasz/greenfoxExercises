'use strict';




// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var star = '*';
var paddingSpace = ' ';
var lineCount = 7;

for (var i = 0; i <= lineCount; i++){
    if (i < (lineCount/2)){
        console.log(paddingSpace.repeat(lineCount-(i)) + star + paddingSpace.repeat(lineCount-(i)));
        star += '**';
    } else{
        star -= '**';
        console.log(paddingSpace.repeat(i) + star + paddingSpace.repeat(i));
    };
};
