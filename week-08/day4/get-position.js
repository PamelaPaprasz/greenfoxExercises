'use strict';

var input = document.querySelector('.input');
var sendButton = document.querySelector('.send');
var map = document.querySelector('.map');
var long = document.querySelector('.long');
var lat = document.querySelector('.lat');
// var requestedData;
var finalUrl;


function getFromServer(url, callback) {
	var xhr = new XMLHttpRequest(),
	method = "GET";

	xhr.open(method, url, true);
    xhr.setRequestHeader('X-Mashape-Key', 'neqzkbWgq0mshAQqiLsyvAZpaEtvp1Ygbcvjsnwl8KAzKHVCtr');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            console.log(requestedData);
            callback(requestedData);
		}
	}
	xhr.send();
}

var mapDrawing = function(parsedData){
    lat.innerHTML = parsedData.Results[0].lat;
    long.innerHTML = parsedData.Results[0].lon;
}

var urlMaker = function(){
    finalUrl = 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + input.value;
    console.log(finalUrl);
    getFromServer(finalUrl, mapDrawing);
}

sendButton.addEventListener('click', urlMaker);