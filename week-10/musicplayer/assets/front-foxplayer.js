'use strict'

var trackContainer = document.querySelector('.tracks');
var songContainer = document.querySelector('.actual-track-list');
var sourceSong = document.querySelector('audio');
var polipX = document.querySelector('.ever-list');
var rankNumber;
var method;



function ajax(url, method, callback) {
	var xhr = new XMLHttpRequest();

	xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            callback(requestedData);
		}
	}
	xhr.send();
}


function createPlaylist(serverData) {
	console.log(serverData);
	trackContainer.innerHTML = '';
    serverData.forEach(function(element, index){
        var trackBox = document.createElement('div');
        trackBox.setAttribute('class', 'track-box');
        if (index % 2 === 0){
            trackBox.setAttribute('class', 'track-box even-track');    
        }
        trackBox.setAttribute('id', element.id);
        trackBox.innerHTML = element.title;
        trackContainer.appendChild(trackBox);
		
		var xSign = document.createElement('div');
		xSign.setAttribute('class', 'x-sign');
		xSign.setAttribute('id', element.id);
		trackBox.appendChild(xSign);
		
		xSign.addEventListener('click', function(){
			ajax('http://localhost:3000/playlists/' + xSign.id, 'DELETE', createPlaylist);
		})
		ajax('http://localhost:3000/playlists-tracks/', 'GET', createTracklist);	
    });
}



function createTracklist(serverData) {
    rankNumber = 0
	songContainer.innerHTML = '';
    serverData.forEach(function(element, index){
        rankNumber++
        var songBox = document.createElement('div');
        songBox.setAttribute('class', 'song-box');
        if (index % 2 === 0){
            songBox.setAttribute('class', 'song-box even-song');    
        }
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

ajax('http://localhost:3000/playlists', 'GET', createPlaylist);

