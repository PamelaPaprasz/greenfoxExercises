var asteroidList = document.querySelector('ul');

var king = document.querySelector('li');

asteroidList.removeChild(king);

var contList = ['apple', 'bubble', 'cat', 'green fox'];

for (var i = 0; i<contList.length; i++){
    var apple = document.createElement('li')
    apple.id = 'apple';
    apple.textContent = contList[i];
    asteroidList.appendChild(apple);
};
