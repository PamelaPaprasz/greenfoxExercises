// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.
'use strict';

var letterCounter = function(str){
    var dictionary = {};
    var strToArray = Array.from(str);
    
    strToArray.forEach(function(letter){
        if(letter in dictionary){
             dictionary[letter]++;
        } else{
            dictionary[letter] = 1;
        }
    });
    return dictionary;
}
    
console.log(letterCounter('alma'));

module.exports = letterCounter;


