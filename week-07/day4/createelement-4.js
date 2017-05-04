
var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]


var asteroidList = document.querySelector('ul');

var king = document.querySelector('li');

asteroidList.removeChild(king);

for (var i = 0; i<planetData.length; i++){
    if (planetData[i].asteroid === true){
        var newAsteroid = document.createElement('li');
        newAsteroid.className = planetData[i].category;
        newAsteroid.textContent = planetData[i].content;
        asteroidList.appendChild(newAsteroid);
    };
};

console.log(asteroidList);
