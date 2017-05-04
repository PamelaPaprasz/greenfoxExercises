var listItems = document.querySelectorAll('li');
var result = document.querySelector('p');
var button = document.querySelector('button');

function count(){
    if (button.classList.toggle('but')){
        result.textContent = listItems.length;    
    } else{
        result.textContent = 'dunno again :)'
    };
};
button.addEventListener('click', count);

