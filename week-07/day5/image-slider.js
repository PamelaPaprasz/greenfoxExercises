var main = document.querySelector('.main');
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentText = document.querySelector('p');
// var currentImg = document.querySelector('img');
var i = -1;
var t = 0;
var thumbNth = 0;
callImage('cic.jpg');
callText();

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.setAttribute('title', element.title);
    thumb.setAttribute('discr', element.discr);
    thumb.setAttribute('number', t++);
    // thumb.innerHTML = t++;
    thumb.className = 'thumb'+ thumbNth++;
    allThumb.appendChild(thumb);    
});

var thumbElement = document.querySelectorAll('.thumblist img');


var thumb0 = document.querySelector('.thumb0');
var thumb1 = document.querySelector('.thumb1');
var thumb2 = document.querySelector('.thumb2');
var thumb3 = document.querySelector('.thumb3');
var thumb4 = document.querySelector('.thumb4');
var thumb5 = document.querySelector('.thumb5');
var thumb6 = document.querySelector('.thumb6');
var thumb7 = document.querySelector('.thumb7');
var thumb8 = document.querySelector('.thumb8');
var thumb9 = document.querySelector('.thumb9');


function thumbClick0(){
    main.style.backgroundImage = 'url(' + thumb0.src + ')';
    currentText.textContent = thumb0.title + ' ' + thumb0.discr;    
};
thumb0.addEventListener("click", thumbClick0);

function thumbClick1(){
    main.style.backgroundImage = 'url(' + thumb1.src + ')';
    currentText.textContent = thumb1.title + ' ' + thumb1.discr;   
};
thumb1.addEventListener("click", thumbClick1);

function thumbClick2(){
    main.style.backgroundImage = 'url(' + thumb2.src + ')';
    currentText.textContent = thumb2.title + ' ' + thumb2.discr;    
};
thumb2.addEventListener("click", thumbClick2);

function thumbClick3(){
    main.style.backgroundImage = 'url(' + thumb3.src + ')';
    currentText.textContent = thumb3.title + ' ' + thumb3.discr;   
};
thumb3.addEventListener("click", thumbClick3);

function thumbClick4(){
    main.style.backgroundImage = 'url(' + thumb4.src + ')';
    currentText.textContent = thumb4.title + ' ' + thumb4.discr;   
};
thumb4.addEventListener("click", thumbClick4);

function thumbClick5(){
    main.style.backgroundImage = 'url(' + thumb5.src + ')';
    currentText.textContent = thumb5.title + ' ' + thumb5.discr;   
};
thumb5.addEventListener("click", thumbClick5);

function thumbClick6(){
    main.style.backgroundImage = 'url(' + thumb6.src + ')';
    currentText.textContent = thumb6.title + ' ' + thumb6.discr;  
};
thumb6.addEventListener("click", thumbClick6);

function thumbClick7(){
    main.style.backgroundImage = 'url(' + thumb7.src + ')';
    currentText.textContent = thumb7.title + ' ' + thumb7.discr;   
};
thumb7.addEventListener("click", thumbClick7);

function thumbClick8(){
    main.style.backgroundImage = 'url(' + thumb8.src + ')';
    currentText.textContent = thumb8.title + ' ' + thumb8.discr;   
};
thumb8.addEventListener("click", thumbClick8);

function thumbClick9(){
    main.style.backgroundImage = 'url(' + thumb9.src + ')';
    currentText.textContent = thumb9.title + ' ' + thumb9.discr;   
};
thumb9.addEventListener("click", thumbClick9);




// thumbElement.forEach(function(eachThumb) {
//   eachThumb.addEventListener('click', thumbClick);
// });

// ('.thumblist img').click(function() {
//     t = '.thumblist img'.index(this);
// });

// function whichThumbClicked(){
//     
//     thumbElement.forEach(function(element, index){
//         element.addEventListener('click', thumbClick );
//     });
//     return element;
// };

// 
// function handleClick(function(e) {
//        t = e.target.getAttribute('src');
// };
// thumbElement.addEventListener('click', handleClick);
// 
// 
// var clickedThumb = onclick.target.index;
// 
// 

// function countIndex(){
//     for (var t = 0; t<thumbElement.length-1; t++){
//         if (clickedOrNot){
//             t++;
//             thumbClick();
//             break;
//         } else{
//             t++
//         };
//     }; return t;
// };


// thumbElement.addEventListener('click', thumbClick);
// thumbElement.onclick = thumbClick;



function callImage(url = false){
    var imageName = url || images[i].img;
    main.style.backgroundImage = 'url(' + imageName + ')';
};


function callText(){
    if (i === -1){
        currentText.textContent = openingTitle;
    } else{
        currentText.textContent = images[i].title + '\n' + images[i].discr;    
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




