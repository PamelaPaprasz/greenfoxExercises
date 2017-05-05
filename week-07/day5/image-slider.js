var main = document.querySelector('.main');
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentText = document.querySelector('p');
// var currentImg = document.querySelector('img');
var i = -1;
callImage('cic.jpg');

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.className = 'thumb';
    allThumb.appendChild(thumb);    
});

function callImage(url = false){
    var imageName = url || images[i].img;
    main.style.backgroundImage = 'url(' + imageName + ')';
};

function callText(){
    currentText.textContent = images[i].title + '\n' + images[i].discr;
};


function callPrev(){  
    if (i === 0 || i === -1){
        i = images.length-1;
    } else{
        i--;    
    }; 
    callImage();
    callText();
    // currentImg.setAttribute('src', images[i].img);
};
leftBut.addEventListener('click', callPrev);


function callNext(){
    if (i === images.length-1){
        i = 0;
    } else{
        i++;
    };
    callImage();
    callText();
};
rightBut.addEventListener('click', callNext);


