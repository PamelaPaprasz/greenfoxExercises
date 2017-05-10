var createCandyBut = document.querySelector('.create-candies');
var candy = document.querySelector('.candies');
var buyLollBut = document.querySelector('.buy-lollypops');
var lollypop = document.querySelector('.lollypops');
var candyRain = document.querySelector('.candy-machine');
var candyNumber = 0;
var lollypopNumber = lollypop.innerHTML.length /2;
var rainOnOff = 0;
console.log(typeof lollypopNumber);


var candyMaker = function(){
    candyNumber++;
    candy.innerHTML = candyNumber;
}
createCandyBut.addEventListener('click', candyMaker);  


 var buyLoll = function(){
     if (candyNumber >= 10){
         candyNumber -= 10;
         candy.innerHTML = candyNumber;
         lollypop.innerHTML += '🍭';
         lollypopNumber += 1;
     }
 }
buyLollBut.addEventListener('click', buyLoll);   


var candyGenerator = function(){
    console.log(lollypopNumber, candyNumber);
    if (lollypopNumber >= 10){
        var lol = Math.floor(lollypopNumber / 10);
        candyNumber += lol;
        candy.innerHTML = candyNumber;
    }
}
var candyGeneratorOn = setInterval(candyGenerator, 1000)


var rainMaker = function(){
    if (lollypopNumber >= 10){
        var lol = Math.floor(lollypopNumber / 10);
        candyNumber += lol;
        candy.innerHTML = candyNumber;
    }
}


var rainingCandy = function(){
    rainOnOff += 1;
    if (rainOnOff %2 !== 0){
        clearInterval(candyGeneratorOn);
        candyGeneratorOn = setInterval(rainMaker, 100); 
    } else{
        clearInterval(candyGeneratorOn);
        candyGeneratorOn = setInterval(candyGenerator, 1000);
    }        
}
candyRain.addEventListener('click', rainingCandy);  
