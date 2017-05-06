var main = document.querySelector('.main');
var allThumb = document.querySelector('.thumblist');
var leftBut = document.querySelector('.left');
var rightBut = document.querySelector('.right');
var currentText = document.querySelector('p');
// var currentImg = document.querySelector('img');
var i = -1;
var t = 0;
callImage('cic.jpg');
callText();

images.forEach(function(element){
    var thumb = document.createElement('img');
    thumb.setAttribute('src', element.img);
    thumb.setAttribute('title', element.title);
    thumb.setAttribute('discr', element.discr);
    // thumb.innerHTML = t++;
    thumb.className = 'thumb' + ' ' + t++;
    allThumb.appendChild(thumb);    
});

var thumbElement = document.querySelectorAll('.thumblist img');

var thumb = document.querySelector('.thumb');
// var thumb1 = document.querySelector('.thumb.1');
// var thumb2 = document.querySelector('.thumb.2');
// var thumb3 = document.querySelector('.thumb.3');
// var thumb4 = document.querySelector('.thumb.4');
// var thumb5 = document.querySelector('.thumb.5');
// var thumb6 = document.querySelector('.thumb.6');
// var thumb7 = document.querySelector('.thumb.7');
// var thumb8 = document.querySelector('.thumb.8');
// var thumb9 = document.querySelector('.thumb.9');


function thumbClick(){
    main.style.backgroundImage = 'url(' + thumb.src + ')';
    currentText.textContent = thumb.title + ' ' + thumb.discr;  
    // currentText.textContent = thumb.title;  
    // currentText.textContent = thumb.discr;  
};
thumb.addEventListener("click", thumbClick);




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




