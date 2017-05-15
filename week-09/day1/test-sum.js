'use strict';

var test = require('tape');

var sum = require('./sum.js');

test('sum equal or not', function (t){
    var actual = sum([1, 2, 3, 4, 15]);
    var expected = 25;

    t.equal(actual, expected);
    t.equal(sum([0]), 0);
    t.equal(sum([2, 4, 6]), 12);
    t.equal(sum([5]), 5);
    t.equal(sum([]),'');
    t.equal(sum(['Pami']),'');
    t.end();    
});