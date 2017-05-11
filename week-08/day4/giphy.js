var dolphin =  new XMLHttpRequest();

dolphin.open('GET', 'http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC', true);

dolphin.onreadystatechange = function(){
    if (dolphin.readyState === 4 && dolphin.status === 200){
        console.log(dolphin.response);
    }       
}
dolphin.send();


   