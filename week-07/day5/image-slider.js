var main = document.querySelector('.main');
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentTitle = document.querySelector('h2');
var currentText = document.querySelector('p');
var i = -1;
var thumbNth = 0;
callImage('cic.jpg');
callText();

images.forEach(function(element, index){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.setAttribute('title', element.title);
    thumb.className = 'thumb';
    thumb.addEventListener('click', function(){
        thumbClick(index);
    });
    allThumb.appendChild(thumb);    
});

var thumbElement = document.querySelectorAll('.thumb');

function thumbClick(index){
    i = index;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent =  images[i].discr;
};


function callImage(url = false){
    var imageName = url || images[i].img;
    main.style.backgroundImage = 'url(' + imageName + ')';
};


function callText(){
    if (i === -1){
        currentTitle.textContent = openingTitle;
    } else{
        currentTitle.textContent = images[i].title;
        currentText.textContent = images[i].discr;    
    };
};


function callPrev(){ 
    if (i === 0 || i === -1){
        i = images.length-1;
    } else{
        i--;    
    }; 
    callImage();
    callText();
};
leftBut.addEventListener('click', callPrev);


function callNext(){
    if (i === images.length-1){
        console.log(i);
        i = 0;
    } else{
        i++;
    };
    callImage();
    callText();
};
rightBut.addEventListener('click', callNext);











