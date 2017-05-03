'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.

var words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];

var word = words.splice(2, 1, words[5]);
words.splice(5, 1, word);

var words1 = words.join(' ');

console.log(words1);

