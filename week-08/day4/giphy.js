var dolphin =  new XMLHttpRequest();

dolphin.open('GET', 'http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC', true);

dolphin.onreadystatechange = function(){
    if (dolphin.readyState === 4 && dolphin.status === 200){
        var dolphinDatas = JSON.parse(dolphin.response);
        // console.log(dolphinDatas);
        for (var i = 0; i < 16; i++){
            console.log(dolphinDatas.data[i].images.original_still.url);
        }
    }       
}
dolphin.send();




   