'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var title = 'My todo:';
var todoText = " - Buy milk\n";
var secondItem = ' - Download games';
var subSecond = '\t- Diablo';

console.log(title);
console.log(todoText.slice(0,11));
console.log(secondItem);
console.log(subSecond);

