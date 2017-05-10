'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

var eCounter = fruits.map(function(element){
    var i = 0;
    var letter = element.split('');
    for (var j = 0; j < letter.length; j++){
        if (letter[j] === 'e'){
            i++;
        }
    }    
    return i
}) 

console.log(eCounter);
// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.