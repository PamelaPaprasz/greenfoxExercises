'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var cuboidA = 20;
var cuboidB = 59;
var cuboidC = 287;

var volume = cuboidA * cuboidB * cuboidC;
var surface = 2 * (cuboidA * cuboidB + cuboidA * cuboidC + cuboidB * cuboidC);

console.log(volume);
console.log(surface);

