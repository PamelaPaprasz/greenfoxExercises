'use strict';

var test = require('tape');

var anagramChecker = require('./anagram.js');

test('given strings are anagrams or not', function (t){
    t.equal(anagramChecker('pami', 'mami'), false);
    t.end();
});