'use strict';
// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = 'Greenfox';

function greet(name=''){
    if (name.length > 0){
        console.log('Greetings, dear ' + name + '!');
    } else{
        console.log('Enter something!');
    };
};
greet();
