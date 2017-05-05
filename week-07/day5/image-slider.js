
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentImg = document.querySelector('img');
var i = 0;

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.className = 'thumb';
    allThumb.appendChild(thumb);    
});


function callPrev(){    
    i--;
    currentImg.setAttribute('src', images[i].img);
};
leftBut.addEventListener('click', callPrev);


function callNext(){
    i++;
    currentImg.setAttribute('src', images[i].img);
};
rightBut.addEventListener('click', callNext);


