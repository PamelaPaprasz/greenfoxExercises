'use strict';

var massInKg = 81.2;
var heightInM = 1.78;

// Print the Body mass index (BMI) based on these values

var exponentHeight = Math.pow(heightInM, 2);

var myBmi = massInKg / exponentHeight;

console.log(myBmi);