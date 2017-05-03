'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
var numbers = [4, 8, 12, 16];

function numChecker(needles, haystack){
    for(var i = 0 , len = needles.length; i < len; i++){
        if(needles[i], haystack === -1){
            return false;
        } else{
            return true;
        };
    };
};
     
console.log(numChecker(numbers, listOfNumbers));


