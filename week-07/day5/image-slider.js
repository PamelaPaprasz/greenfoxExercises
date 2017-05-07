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

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.setAttribute('title', element.title);
    thumb.setAttribute('id', element.id);
    thumb.className = 'thumb'+ ' ' + thumbNth++;
    allThumb.appendChild(thumb);    
});

var thumbElement = document.querySelectorAll('.thumb');

function thumbClick(event){
    thumbId = event.target.id;
    main.style.backgroundImage = 'url(' + images[thumbId].img + ')';
    currentTitle.textContent = images[thumbId].title;
    currentText.textContent =  images[thumbId].discr;   
};

thumbElement.forEach(function(thumb) {
  thumb.addEventListener('click', thumbClick);
});


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



