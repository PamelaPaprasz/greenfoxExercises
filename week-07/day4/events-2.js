var listItems = document.querySelectorAll('li');
var result = document.querySelector('p');
var button = document.querySelector('button');
button.className = 'but';


function count(){
    if (button.classList.toggle('but')){
        result.textContent = 'dunno again :)'
    } else{
        result.textContent = listItems.length;    
    };
};
button.addEventListener('click', count);
