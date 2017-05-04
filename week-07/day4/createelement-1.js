var asteroidList = document.querySelector('ul');

var newHello = document.createElement('li');
newHello.id = 'hello';
newHello.textContent = 'The Green Fox';
asteroidList.appendChild(newHello);

var newLight = document.createElement('li');
newLight.id = 'light';
newLight.textContent = 'The Lamplighter';
asteroidList.appendChild(newLight);



var cont = document.querySelector('div');

var newWave = document.createElement('h1');
newWave.id = 'wave';
newWave.textContent = 'I can add elements to the DOM!';
cont.appendChild(newWave);

var newImg = document.createElement('img');
newImg.id = 'image';
cont.appendChild(newImg);
newImg.getAttribute('src');
newImg.setAttribute('src', 'cic.jpg');



