var main = document.querySelector('.main');
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentText = document.querySelector('p');
var i = -1;
var t = 0;
var thumbNth = 0;
var thumbList = [];
callImage('cic.jpg');
callText();

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.setAttribute('title', element.title);
    // thumb.setAttribute('discr', element.discr);
    thumb.setAttribute('number', t++);
    thumb.innerHTML = element.discr;
    thumb.className = 'thumb'+ thumbNth++;
    allThumb.appendChild(thumb);    
});

var thumbElement = document.querySelectorAll('.thumblist img');

// thumbElement.forEach(function(el){
//     var thumbP = document.createElement('p');
//     thumbP. innerHTML = element.discr;
//     thumbElement.appendChild(thumbP);
// })
// var thumbDiscr = document.querySelector('.thumblist img .discr');
// console.log(thumbDiscr);

// create a lsit that contains new variables of eacg thumb

// var listThumbs = thumbElement.map(function(element){
//     return thumb= document.querySelector(element.class);
// });

// var elems = document.querySelectorAll('select option:checked');
// var values = Array.prototype.map.call(thumbElement, function(img) {
//   return img.class;
// });
// console.log(values);

thumbList = [
    thumb0 = document.querySelector('.thumb0'),
    thumb1 = document.querySelector('.thumb1'),
    thumb2 = document.querySelector('.thumb2'),
    thumb3 = document.querySelector('.thumb3'),
    thumb4 = document.querySelector('.thumb4'),
    thumb5 = document.querySelector('.thumb5'),
    thumb6 = document.querySelector('.thumb6'),
    thumb7 = document.querySelector('.thumb7'),
    thumb8 = document.querySelector('.thumb8'),
    thumb9 = document.querySelector('.thumb9')
]




function thumbClick0(){
    i = 0;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr; 
};
thumb0.addEventListener("click", thumbClick0);

function thumbClick1(){
    i = 1;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;  
};
thumb1.addEventListener("click", thumbClick1);

function thumbClick2(){
    i = 2;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr; 
};
thumb2.addEventListener("click", thumbClick2);

function thumbClick3(){
    i = 3;   
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr; 
};
thumb3.addEventListener("click", thumbClick3);

function thumbClick4(){
    i = 4; 
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;   
};
thumb4.addEventListener("click", thumbClick4);

function thumbClick5(){
    i = 5;  
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr; 
};
thumb5.addEventListener("click", thumbClick5);

function thumbClick6(){
    i = 6;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;  
};
thumb6.addEventListener("click", thumbClick6);

function thumbClick7(){
    i = 7;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;    
};
thumb7.addEventListener("click", thumbClick7);

function thumbClick8(){
    i = 8;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;    
};
thumb8.addEventListener("click", thumbClick8);


function thumbClick9(){
    i = 9;
    main.style.backgroundImage = 'url(' + images[i].img + ')';
    currentText.textContent = images[i].title + ' ' + images[i].discr;   
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




