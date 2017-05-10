'use strict';

function factorialTillLimitWithCallback(limit, callback) {
    var factorial = 1;
    for (var i = 1; i <= limit; ++i) {
        callback(factorial);
        factorial *= i;
    }
    return factorial
}

var cica = function(x){
    console.log(x);    
};

// we must call factorialTillLimitWithCallback after we create cica if we use function expression because cica wont be known as a function actually if we call factorialTillLimitWithCallback earlier than we defined cica

factorialTillLimitWithCallback(20, cica);

// Create a function and pass it as a parameter to the factorialTillLimitWithCallback
// function, and print all the factorial numbers till 20