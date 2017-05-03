'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var zero = '0';
var one = '1';
var size = 9;

for (var j = 0; size > 0; size--, j++){
    console.log(zero.repeat(size-1) + one.repeat(1) + zero.repeat(j));
};