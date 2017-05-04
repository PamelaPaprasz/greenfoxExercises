var allLi = document.querySelectorAll('li');
console.log(allLi);

var newItems = ['apple', 'banana', 'cat', 'dog'];
for (var i = 0; i < newItems.length; i++){
    allLi[i].textContent = newItems[i];
};


// for (var i = 0; i<newItems.lenght; i++){
//     
//     allLi[i].innerHTML = newItems[i].textContent;
//     
// };
