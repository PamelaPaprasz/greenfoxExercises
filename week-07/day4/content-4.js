
var allLi = document.querySelectorAll('li');
console.log(allLi);

var newItems = ['apple', 'banana', 'cat', 'dog'];
for (var i = 0; i < newItems.length; i++){
    allLi[i].textContent = newItems[i];
};
