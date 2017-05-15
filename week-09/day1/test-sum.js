'use strict';

var test = require('tape');

var sum = require('./sum.js');

test('sum equal or not', function (t){
    var actual = sum([1, 2, 3, 4, 5]);
    var expected = 15;

    t.equal(actual, expected);
    t.end();    
});