'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";
var text = ' always takes longer than';
var position = 20;

var newOut = quote.substr(0, position) + text + quote.substr(position);

console.log(newOut);





