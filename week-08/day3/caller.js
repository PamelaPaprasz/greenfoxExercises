'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

var selectLastEvenNumber = function(someArray, callback){
    someArray.reverse();
    var lastEven = 0;
    for (var i = 0; i < someArray.length; i++){
        if (someArray[i] %2 === 0){
            lastEven = someArray[i];
            break;
        }    
    }
    callback(lastEven);
}

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8