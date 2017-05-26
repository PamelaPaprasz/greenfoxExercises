'use strict'

var trackContainer = document.querySelector('.tracks');
var songContainer = document.querySelector('.actual-track-list');
var sourceSong = document.querySelector('audio');
var polipX = document.querySelector('.ever-list');
var blackPlus = document.querySelector('.black-plus');
var allTracksPlaylist = document.querySelector('.all-tracks');
var favoriteTracksPlaylist = document.querySelector('.favorite-tracks');
var rankNumber;
var method;
var serverTracklist;
var currentTrack;


function postNewPlaylistToServer(userInput, callback){
	var xhr = new XMLHttpRequest();
	method = "POST";
	
	xhr.open(method, 'http://localhost:3000/playlists', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Accept', 'application/json');
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200){
			var requestedData = JSON.parse(xhr.response);
			callback(requestedData);
		}
	}
	var data = {
		title: userInput,
		system: 0
	}
	xhr.send(JSON.stringify(data));
}


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
	
		
		trackBox.addEventListener('click', function(){
			
			allTracksPlaylist.classList.remove('active-track');
			favoriteTracksPlaylist.classList.remove('active-track');
			
			var trackBoxList = document.querySelectorAll('.track-box');
			
			trackBoxList.forEach(function(element){
				element.classList.remove('active-track')
			})	
			trackBox.classList.add('active-track');
		})	
    });
}


allTracksPlaylist.addEventListener('click', function(){
	var trackBoxList = document.querySelectorAll('.track-box');
	
	trackBoxList.forEach(function(element){
		element.classList.remove('active-track')
	})	
	favoriteTracksPlaylist.classList.remove('active-track');
	
	allTracksPlaylist.classList.add('active-track');
})


favoriteTracksPlaylist.addEventListener('click', function(){
	var trackBoxList = document.querySelectorAll('.track-box');
	
	trackBoxList.forEach(function(element){
		element.classList.remove('active-track')
	})	
	allTracksPlaylist.classList.remove('active-track');
	
	favoriteTracksPlaylist.classList.add('active-track');
})


function createTracklist(serverData) {
    rankNumber = 0
	serverTracklist = serverData;
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
			currentTrack = index;
			playTrack();
        })
    });
}


function playTrack(){
	sourceSong.setAttribute('src', serverTracklist[currentTrack].path)
	sourceSong.play();
	highlight();
}

function highlight(){
	var songBoxList = document.querySelectorAll('.song-box');
	songBoxList.forEach(function (element){
		element.classList.remove('active')
	})
	songBoxList[currentTrack].classList.add('active');
	
}


sourceSong.addEventListener('ended', function(){
	currentTrack++;
	playTrack()
});



function addNewPlaylist(){
	var newPlaylistName = prompt("What's the name of your new playlist?");
	postNewPlaylistToServer(newPlaylistName, createPlaylist);
}
blackPlus.addEventListener('click', addNewPlaylist)


ajax('http://localhost:3000/playlists', 'GET', createPlaylist);

