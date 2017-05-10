// Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times

var button = document.querySelector('button');
var text = document.querySelector('p');

var click = 0;

var clickCounter = function(){
    click++;
    delayPrint();
}

var helper = function(){
    if (click === 3){
        text.textContent = '5 seconds ellapsed and clicked 3 times';
    }
}

var delayPrint = function(){
    setTimeout(helper, 5000)
}

button.addEventListener('click', clickCounter);