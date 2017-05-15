// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed

'use strict';

var typeString = function(numList){
    var stringOrNot = false;
    numList.forEach(function(element){
        if (typeof element === 'string'){
            stringOrNot = true;
        } 
    })
    return stringOrNot;
}

var sum = function(numList){
    
    if (numList === null){
        throw new Error('array value is null');
    } else if (typeString(numList)){
        throw new Error('array contains string')
    } else if (numList.length < 1){
        throw new Error('no element in the list')
    } else{
        var sumedList = numList.reduce(function(prev, current){
            return prev + current;
        });
        return sumedList;    
    }
}

try {
    console.log(sum([5, 3, 6, 2, 9]));
} catch (err) {
    console.log(err.message);
}


module.exports = sum;