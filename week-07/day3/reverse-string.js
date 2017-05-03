'use strict';
// Reverse the string!

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"


function reverseString(string){
    var reversedBack = '';
    for (var i = string.length -1; i >=0; i--)
        reversedBack += string[i];
    return reversedBack;
};

console.log(reverseString(reversed));
