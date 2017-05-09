// Create an Animal constructor
// 
// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
// Create a Farm constructor
// 
// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal

function Animal(name){
    this.name = name,
    this.hunger = 50,
    this.thirst = 50,
    this.eat = function(){
        this.hunger--;
    }
    this.drink = function(){
        this.thirst--;
    }
    this.play = function(){
        this.hunger++;
        this.thirst++;
        return [this.hunger, this.thirst];
    }
}


function Farm(){
    this.animalList = [],
    this.freePlace = 4,
    this.breed = function(name){
        if (this.freePlace > 0){
            animal = new Animal(name);
            this.animalList.push(animal);
            this.freePlace--;
        }
    }
    // this.slaughter = function(){
    //     this.animalList.sort(function(a, b){
    //         return a.hunger - b.hunger;
    //     });
    //     this.animalList.shift();
    //     return this.animalList;
    // }
    this.slaughter = function(){
        lessHungry = this.animalList[0];
        var lessHungryIndex = 0;
        for (var i = 0; i<this.animalList.length; i++){
            if (lessHungry.hunger > this.animalList[i].hunger){
                lessHungry = this.animalList[i];
                lessHungryIndex = i
            }
        }
        this.animalList.splice(lessHungryIndex, 1);
        return this.animalList;
    }
}

var farm1 = new Farm();
farm1.breed('ancsi');
farm1.breed('putyi');
farm1.breed('cica');
farm1.breed('lala');
farm1.animalList[2].eat();
farm1.animalList[1].drink();
farm1.animalList[3].drink();
farm1.animalList[1].play();
farm1.animalList[1].play();
farm1.animalList[1].play();
farm1.animalList[0].play();
farm1.animalList[3].play();
farm1.animalList[3].play();
console.log(farm1.slaughter());

