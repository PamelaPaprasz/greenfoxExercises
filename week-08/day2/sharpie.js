// Create a Sharpie constructor
// 
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width

function Sharpie(color, width) {
    this.color = color,
    this.width = width,
    this.inkAmount = 100,
    this.use = function(){
        this.inkAmount -= this.width
    }
}

var sharpie1 = new Sharpie('red', 30.5)
console.log(sharpie1);
sharpie1.use();
console.log(sharpie1);