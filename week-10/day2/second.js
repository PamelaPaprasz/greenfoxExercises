'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function MakeRectangle(side1, side2){
    this.side1 = side1;
    this.side2 = side2;
    this.getArea = function(){
        return this.side1 * this.side2;
    }
    this.getCircumference = function(){
        return 2*(this.side1 + this.side2);
    }
}

var rect1 = new MakeRectangle(3, 5);
console.log(rect1.getArea());
console.log(rect1.getCircumference());