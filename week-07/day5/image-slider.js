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

// var thumbElement = document.querySelectorAll('.thumblist img');
var thumbElement = document.querySelectorAll('.thumb');


var thumb0 = document.querySelector('#one');
var thumb1 = document.querySelector('#two');
var thumb2 = document.querySelector('#three');
var thumb3 = document.querySelector('#four');
var thumb4 = document.querySelector('#five');
var thumb5 = document.querySelector('#six');
var thumb6 = document.querySelector('#seven');
var thumb7 = document.querySelector('#eight');
var thumb8 = document.querySelector('#nine');
var thumb9 = document.querySelector('#ten');


function thumbClick0(){
    i = 0;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr; 
};
thumb0.addEventListener("click", thumbClick0);

function thumbClick1(){
    i = 1;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;  
};
thumb1.addEventListener("click", thumbClick1);

function thumbClick2(){
    i = 2;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr; 
};
thumb2.addEventListener("click", thumbClick2);

function thumbClick3(){
    i = 3;   
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr; 
};
thumb3.addEventListener("click", thumbClick3);

function thumbClick4(){
    i = 4; 
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;   
};
thumb4.addEventListener("click", thumbClick4);

function thumbClick5(){
    i = 5;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr; 
};
thumb5.addEventListener("click", thumbClick5);

function thumbClick6(){
    i = 6;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;  
};
thumb6.addEventListener("click", thumbClick6);

function thumbClick7(){
    i = 7;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;    
};
thumb7.addEventListener("click", thumbClick7);

function thumbClick8(){
    i = 8;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;    
};
thumb8.addEventListener("click", thumbClick8);


function thumbClick9(){
    i = 9;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentTitle.textContent = images[i].title;
    currentText.textContent = images[i].discr;   
};
thumb9.addEventListener("click", thumbClick9);




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



// 
// function thumbClick(event){
//      var oneOfThumbs = event.target.allThumb;
//     
//     if ( oneOfThumbs.contains('#one') ){
//         i = 0;    
//     } else if ( oneOfThumbs.contains('#two') ){
//         i = 1;    
//     } else if ( oneOfThumbs.contains('#three') ){
//         i = 2;    
//     } else if ( oneOfThumbs.contains('#four') ){
//         i = 3;    
//     } else if ( oneOfThumbs.contains('#five') ){
//         i = 4;    
//     } else if ( oneOfThumbs.contains('#six') ){
//         i = 5;    
//     } else if ( oneOfThumbs.contains('#seven') ){
//         i = 6;    
//     } else if ( oneOfThumbs.contains('#eight') ){
//         i = 7;    
//     } else if ( oneOfThumbs.contains('#nine') ){
//         i = 8;    
//     } else if ( oneOfThumbs.contains('#ten') ){
//         i = 9;    
//     };
//     main.style.backgroundImage = 'url(' + images[i].img + ')';
//     currentText.textContent = images[i].title + ' ' + images[i].discr;   
// };
// 
// 
// thumbElement.forEach(function(thumb) {
//   thumb.addEventListener('click', thumbClick);
// });

// allThumb.addEventListener('click', thumbClick);

// thumbElement.addEventListener('click', thumbClick);
// thumbElement.onclick = thumbClick;

