var dolphin =  new XMLHttpRequest();
var container = document.querySelector('div');
var allImages = document.querySelectorAll('img');
var gifOnOff = 0;

dolphin.open('GET', 'http://api.giphy.com/v1/gifs/search?q=gif+art&api_key=dc6zaTOxFJmzC', true);
dolphin.send();

dolphin.onreadystatechange = function(){
    if (dolphin.readyState === 4 && dolphin.status === 200){
        var dolphinDatas = JSON.parse(dolphin.response);
        var first16Dolphins = dolphinDatas.data.slice(0, 16);
        createDolphin(first16Dolphins);
    }       
}


var createDolphin = function(dolphinImagesData){
    dolphinImagesData.forEach (function(element){
        var image = document.createElement('img');
        image.setAttribute('src', element.images.original_still.url);
        image.addEventListener('click', function(){
            gifOnOff++;
            if (gifOnOff %2 !== 0){
                image.setAttribute('src', element.images.original.url);    
            } else{
                image.setAttribute('src', element.images.original_still.url);
            }
        })
        container.appendChild(image);    
    })
}



   