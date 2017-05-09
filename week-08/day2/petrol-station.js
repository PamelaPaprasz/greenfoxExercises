'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000

var car = {
    petrolLevel: 0,
    petrolCapacity: 50,
    refill: function(amount){
        var freeSpaceInTank = this.petrolCapacity - this.petrolLevel;
        if (amount < freeSpaceInTank){
            return amount;
        } else{
            return freeSpaceInTank;    
        }
    }
}
console.log(car.refill(45));


var station = {
    petrolStorage: 3000,
    provide: function(someCar, amount){
        var consumedPetrol = car.refill(amount);
        return this.petrolStorage - consumedPetrol;
    }
}

console.log(station.provide(car, 45));
console.log(car.petrolLevel);
console.log(station.petrolStorage);

