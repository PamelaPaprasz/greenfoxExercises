'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds


var applePrinter = function(){
    console.log('apple');
}
var pearPrinter = function(){
    console.log('pear');
}
var melonPrinter = function(){
    console.log('melon');
}
var grapesPrinter = function(){
    console.log('grapes');
}

applePrinter();
setTimeout(pearPrinter, 1000);
setTimeout(melonPrinter, 3000);
setTimeout(grapesPrinter, 5000);
    
