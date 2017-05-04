var imageUrl = document.querySelector('img');
console.log(imageUrl);

console.log(imageUrl.getAttribute('src'));
imageUrl.setAttribute('src', 'cic.jpg');




var webSite = document.querySelector('a');
console.log(webSite);

console.log(webSite.getAttribute('href'));
webSite.setAttribute('href', 'https://www.greenfoxacademy.com/');




var disBut = document.querySelector('button');
console.log(disBut);

disBut.remove();




var noClick = document.querySelector('.this-one');
console.log(noClick);

var replText = 'Don\'t click me!';

noClick.textContent = replText; 





