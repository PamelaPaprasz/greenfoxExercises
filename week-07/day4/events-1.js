
var button = document.querySelector('button');
var content = document.querySelector('div');

function party(){
    content.classList.toggle('party');
};
button.addEventListener('click', party);



