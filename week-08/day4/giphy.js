var dolphin =  new XMLHttpRequest();
var container = document.querySelector('div');

dolphin.open('GET', 'http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC', true);
dolphin.send();

dolphin.onreadystatechange = function(){
    if (dolphin.readyState === 4 && dolphin.status === 200){
        var dolphinDatas = JSON.parse(dolphin.response);
        createDolphin(dolphinDatas.data);
    }       
}


var createDolphin = function(dolphinImagesData){
    for (var j = 0; j < 16; j++){
        var image = document.createElement('img');
        image.setAttribute('src', dolphinImagesData[j].images.original_still.url);
        container.appendChild(image);    
    }
}


   