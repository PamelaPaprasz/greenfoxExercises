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


var lineCount = 6;
var symbol = '%';
var space = ' ';

for (var i = 0; i < lineCount; i++){
    if (i === 0 || i === lineCount-1){
        console.log(symbol.repeat(lineCount-1));
    } else if (i === 1){
        console.log(symbol.repeat((lineCount/2)-1) + space.repeat((lineCount/2)-1) + symbol.repeat(1));    
    } else if (i === 2){
            var repeatPattern = symbol.repeat(1) + space.repeat(1);
            console.log(repeatPattern.repeat(lineCount/2));
    } else if (i === 3){
        console.log(symbol.repeat(1) + space.repeat((lineCount/2)-1) + symbol.repeat((lineCount/2)-1)); 
    } else if (i === 4){
        console.log(symbol.repeat(1) + space.repeat(lineCount/2) + symbol.repeat(1));
    };
};

