'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals(){
    this.sound = 'meouw';
    this.say = function(){
        console.log(this.sound);
    }
}

var cica = new Animals();

cica.say();