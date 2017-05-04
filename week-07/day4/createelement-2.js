var asteroidList = document.querySelector('ul');
var remKing = document.querySelector('li');

asteroidList.removeChild(remKing);

var newText1 = document.createElement('li');
newText1.id = 't1';
newText1.textContent = 'The Fox';
asteroidList.appendChild(newText1);

var newText2 = document.createElement('li');
newText2.id = 't2';
newText2.textContent = 'The Fox';
asteroidList.appendChild(newText2);

var newText3 = document.createElement('li');
newText3.id = 't3';
newText3.textContent = 'The Fox';
asteroidList.appendChild(newText3);


