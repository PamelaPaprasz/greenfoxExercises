var allP = document.querySelectorAll('p');
console.log(allP);

var last = allP[3];

allP.forEach(function(element){
    element.innerHTML = last.textContent;
});
