'use strict';

// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//


var lineCount = 28;
var symbol = '%';
var space = ' ';
var pattern = ' ';

for (var i=0; i < lineCount; i++){
    if (i %2 === 0){
        pattern = symbol.repeat(1) + space.repeat(1);
        console.log(pattern.repeat(lineCount/2));
    } else{
        pattern = space.repeat(1) + symbol.repeat(1);
        console.log(pattern.repeat(lineCount/2));
    };
};