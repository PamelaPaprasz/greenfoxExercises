'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (var i = 0; i < lineCount; ++i){
    if (i === 0){
        console.log('*');
    } else if (i === 1){
        console.log('**');
    } else if (i === 2){
        console.log('***');
    } else if (i === 3){
        console.log('****');
    };
};