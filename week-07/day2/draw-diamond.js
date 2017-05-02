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
var s = 0;
var paddingSpace = ' ';
var lineCount = 35;

for (var i = 0; i < lineCount; i++){
    if (i < lineCount/2){
        console.log(paddingSpace.repeat(lineCount-i) + star.repeat(s+1));
        s += 2;
    } else if (i > lineCount/2 && i < lineCount){
        s -= 2;
        console.log(paddingSpace.repeat(i+1) + star.repeat(s-1));
    };
};
