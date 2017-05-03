'use strict';
// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

var s = [1, 2, 3, 8, 5, 6];

var changedList = s.map(function(element, i, s){
    if (i === 3){
        element = 4;
    };
    return element;
});
console.log(changedList[3]);