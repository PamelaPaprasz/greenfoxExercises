'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

var selectLastEvenNumber = function(someArray, callback){
    someArray.reverse();
    var evens = someArray.filter(function (number){
        return number %2 === 0;
    })
    callback(evens[0]);
}

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8