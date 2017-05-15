'use strict';

var test = require('tape');

var sum = require('./sum.js');

test('sum equal or not', function (t){
    var actual = sum([1, 2, 3, 4, 15]);
    var expected = 25;
    t.equal(actual, expected);
    t.end();    
});

test('empty list', function (t){
    t.throws(function(){sum([])}, 'no element in the list');
    t.end();
});

test('array value is null', function (t){
    t.throws(function(){sum(null)}, 'array value is null');
    t.end();
});    
    
test('array has string or not', function (t){
    t.throws(function(){sum([1, 'Pami', 3, 4])}, 'array contains string');    
    t.end();
});

test('sum only one element', function (t){
    t.equal(sum([5]), 5);
    t.end();    
});