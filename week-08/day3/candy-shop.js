var createCandyBut = document.querySelector('.create-candies');
var candy = document.querySelector('.candies');
var buyLollBut = document.querySelector('.buy-lollypops');
var lollypop = document.querySelector('.lollypops');
var candyNumber = 0;


var candyMaker = function(){
    candyNumber++;
    candy.innerHTML = candyNumber;
}
createCandyBut.addEventListener('click', candyMaker);  



 var buyLoll = function(){
     if (candyNumber >= 100){
         lollypop.innerHTML += '🍭';
         candyNumber -= 100;
     }
 }
buyLollBut.addEventListener('click', buyLoll);   