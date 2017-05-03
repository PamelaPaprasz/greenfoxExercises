'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number){
    var factorialOfNumber = 1;
    
    for (var i = 1; i <= number; i++){
        factorialOfNumber *= i;
    };
    return factorialOfNumber;
};

console.log(factorio(5));