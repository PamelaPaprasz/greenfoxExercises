'use strict';

var test = require('tape');

var arrWtihDoubles = [1, 2, 4, 6, 6, 9, 3, 1];

var sudoku = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function validate(array = false){
    var result = 1;
    if (array.length === 9) {
        array.forEach(function(el) {
            if (typeof el === "number" && 0 <= el && el <= 9 && el % 1 === 0) {
                result *= 1;
            } else {
                result *= 0;
            }
        })
        if (result === 1) {
            return duplicationChecker(array)
            
        } else {
            return false;
        }    
    } else {
        return false;
    }
}


function duplicationChecker(array = false){
    var properSudoku = [];
    array.forEach(function(el){
        if (properSudoku.indexOf(el) === -1 || el === 0){
            properSudoku.push(el);
        } 
    })
    return array.length === properSudoku.length;
}

test('length test', function (t){
    t.equal(validate([0]), false);
    t.equal(validate(sudoku), true);
    t.equal(validate(), false);
    t.end();
    
})

test('value test', function (t){
    t.equal(validate(['a', 0, 1, 2, 4, 5, 6, 7, 8]), false);
    t.equal(validate([10, 0, 1, 2, 4, 5, 6, 7, 8]), false);
    t.equal(validate([0.5, 1, 2, 3, 4, 5, 6, 7, 8]), false);
    t.end();
    
})

test('sudoku line test', function(t){
    t.equal(validate([1, 0, 1, 2, 4, 5, 6, 7, 8]), false);
    t.end();
})


