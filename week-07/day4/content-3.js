var firstP = document.querySelector('p');
console.log(firstP);

var secondP = document.querySelector('.output1');
console.log(secondP);

var thirdP = document.querySelector('.output2');
console.log(thirdP);

secondP.innerHTML = firstP.textContent;
thirdP.innerHTML = firstP.innerHTML;