'use strict';

function deleyPrintApple(stringParam1) {
    setTimeout(function () {
        printString(stringParam1);
    }, 3000);
}

var printString = function(stringParam2){
    console.log(stringParam2);
}

deleyPrintApple('apple');

// Write a program that prints apple after 3 seconds.


var printString = function () {
    console.log('apple');
}
setTimeout(printString, 3000);

