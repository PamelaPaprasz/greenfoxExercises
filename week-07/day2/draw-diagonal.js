'use strict';


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


var lineCount = 16;
var symbol = '%';
var space = ' ';

for (var i = 0; i < lineCount; i++){
    if (i === 0 || i === lineCount -1){
        console.log(symbol.repeat(lineCount-1));
    } else if (i === lineCount - 2){
        console.log(symbol.repeat(1) + space.repeat(i - 1) + symbol.repeat(1));    
    } else{
        console.log(symbol.repeat(1) + space.repeat(i - 1) + symbol.repeat(1) + space.repeat(lineCount - i - 3) + symbol.repeat(1)); 
    };
};
