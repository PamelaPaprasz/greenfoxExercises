'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
var numbers = [4, 8, 12, 16];

function numChecker(needles, haystack){
    
    for(var i = 0 , len = needles.length, isInList = 0; i <= len; i++, isInList++){
        
        if (haystack.indexOf(needles[i]) !== -1 && isInList < len){
            continue;
        } else if (isInList === len){
            return true;   
        } else{
            return false;
        };
    };
};
     
console.log(numChecker(numbers, listOfNumbers));

