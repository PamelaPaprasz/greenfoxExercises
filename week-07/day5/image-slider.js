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
    thumb.innerHTML = t++;
    thumb.className = 'thumb';
    allThumb.appendChild(thumb);    
});



// ('.thumblist img').click(function() {
//     t = '.thumblist img'.index(this);
// });



// allThumb.forEach(function(element) {
//   element.addEventListener('click', slider);
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
// var thumbElement = document.querySelectorAll('.thumblist img');
// 
// var clickedThumb = onclick.target.index;
// 
// function thumbClick(){
//     main.style.backgroundImage = 'url(' + thumbElement[clickedThumb].src + ')';
//     currentText.textContent = thumbElement[clickedThumb].class + '\n' + thumbElement[clickedThumb].id;  
// };
// 
// thumbElement.forEach(function(element){
//     element.addEventListener('click', thumbClick);   
// });

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


// thumbElement.getAttribute('src').addEventListener("click", thumbClick);
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




