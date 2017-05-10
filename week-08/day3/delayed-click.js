// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

var button = document.querySelector('button');
var text = document.querySelector('p');

var printInnerHtml = function(){
    text.textContent = '2 seconds ellapsed';
}

var delayPrint = function(){
    setTimeout(printInnerHtml, 2000)
}

button.addEventListener('click', delayPrint);