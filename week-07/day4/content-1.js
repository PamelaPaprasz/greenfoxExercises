var heading = document.querySelector('h1');
console.log(heading);
alert(heading.innerHTML);

var firstP = document.querySelector('p').innerHTML;
console.log(firstP);

var secondP = document.querySelector('.other').innerHTML;
console.log(secondP);
alert(secondP);

heading.textContent = 'New content';

var lastP = document.querySelector('.result');
lastP.textContent = firstP;
console.log(lastP);


