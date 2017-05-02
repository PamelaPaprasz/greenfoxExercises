'use strict';

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

var lineCount = 4;
var symbol = '%';
var space = ' ';

for (var i=0; i < lineCount; i++){
    if (i === 0 || i === lineCount-1){
        console.log(symbol.repeat(lineCount-1));
    } else{
        console.log(symbol + space.repeat(lineCount-3) + symbol);
    };
};

