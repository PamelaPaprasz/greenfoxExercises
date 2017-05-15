'use strict';

var test = require('tape');

var apple = require('./apples.js');

test('parameter checker', function (t){
    var actual = apple.getApple('apple');
    var expected = 'apple';

    t.equal(actual, expected);
    t.end();    
});