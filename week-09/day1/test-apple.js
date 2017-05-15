'use strict';

var test = require('tape');

var getApple = require('./apples.js');

test('parameter checker', function (t){
    var actual = getApple('apple');
    var expected = 'apple';

    t.equal(actual, expected);
    t.end();    
});