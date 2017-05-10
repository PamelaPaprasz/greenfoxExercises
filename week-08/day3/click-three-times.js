// Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times

var button = document.querySelector('button');
var text = document.querySelector('p');
var click = 0;
var time = false;

var clickCounter = function(){
    click++;
    if (click >= 3 && time === true){
        text.textContent = '5 seconds ellapsed and clicked 3 times';
    }   
}


var delayDisplay = function(){
    
    if (click >= 3){
        text.textContent = '5 seconds ellapsed and clicked 3 times';
    } else{
        time = true;
    }
}

button.addEventListener('click', clickCounter);    
setTimeout(delayDisplay, 5000)
