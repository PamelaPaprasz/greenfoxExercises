'use strict'

var trackContainer = document.querySelector('.tracks');
var songContainer = document.querySelector('.actual-track-list');
var sourceSong = document.querySelector('audio');
var rankNumber;



function getData(url, callback) {
	var xhr = new XMLHttpRequest();
	var method = "GET";

	xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
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


function createPlaylist(serverData) {
    serverData.forEach(function(element, index){
        var trackBox = document.createElement('div');
        trackBox.setAttribute('class', 'track-box');
        if (index % 2 === 0){
            trackBox.setAttribute('class', 'track-box even-track');    
        }
        trackBox.setAttribute('id', element.id);
        trackBox.innerHTML = element.title;
        trackContainer.appendChild(trackBox);
    });
}



function createTracklist(serverData) {
    rankNumber = 0
    serverData.forEach(function(element, index){
        rankNumber++
        var songBox = document.createElement('div');
        songBox.setAttribute('class', 'song-box');
        if (index % 2 === 0){
            songBox.setAttribute('class', 'song-box even-song');    
        }
        // songBox.setAttribute('href', element.path);
        songBox.setAttribute('id', element.id);
        songBox.innerHTML = rankNumber + ' ' +  element.title + ' ' + '(' + element.artist + ')';
        songContainer.appendChild(songBox);
        
        var duration = document.createElement('div');
        duration.setAttribute('class', 'duration');
        duration.innerHTML = element.duration;
        songBox.appendChild(duration);
        songBox.addEventListener('click', function(){
            playClickedTrack(element.path)
        })
    });
}

function playClickedTrack(path){
    sourceSong.setAttribute('src', path)
    sourceSong.play();
}

getData('http://localhost:3000/playlists', createPlaylist);
getData('http://localhost:3000/playlists-tracks/', createTracklist);








