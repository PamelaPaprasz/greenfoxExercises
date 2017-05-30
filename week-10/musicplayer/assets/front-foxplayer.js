'use strict'

var trackContainer = document.querySelector('.tracks');
var songContainer = document.querySelector('.actual-track-list');
var sourceSong = document.querySelector('audio');
var polipX = document.querySelector('.ever-list');
var blackPlus = document.querySelector('.black-plus');
var allTracksPlaylist = document.querySelector('.all-tracks');
var favoriteTracksPlaylist = document.querySelector('.favorite-tracks');
var playButton = document.querySelector('.play-button');
var currentTrackTitle = document.querySelector('h2');
var currentTrackArtist = document.querySelector('p');
var addSongToPlaylist = document.querySelector('.grey-plus');
var addSongToFavorites = document.querySelector('.star');
var prevSong = document.querySelector('.rewind');
var nextSong = document.querySelector('.forward');
var shuffle = document.querySelector('.shuffle');
var dynamicPlayListContainer = document.querySelectorAll('.track-box');
var rankNumber;
var method;
var serverTracklist;
var currentTrack;
var randomIndex;

function songToPlaylist(){
	var choosenPlaylist = prompt("Write here the name of the playlist u wanna include the currently playing song!");
	postToServer('http://localhost:3000/playlists-connection', choosenPlaylist, serverTracklist[currentTrack], createPlaylist)
}
addSongToPlaylist.addEventListener('click', songToPlaylist)


function songToFavorites(){
	console.log(serverTracklist[currentTrack]);
	postToServer('http://localhost:3000/playlists-connection', 'Favorites', serverTracklist[currentTrack], createPlaylist)
}
addSongToFavorites.addEventListener('click', songToFavorites)



function postToServer(url, userInput, recentSong = false, callback){
	var xhr = new XMLHttpRequest();
	method = "POST";
	
	xhr.open(method, url, true);
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
		system: 0,
		recentSong: recentSong
	}
	console.log(data);
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
			console.log(requestedData);
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
			ajax('http://localhost:3000/playlists-tracks/' + element.title, 'GET', createTracklist);
			
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
	ajax('http://localhost:3000/playlists-tracks/', 'GET', createTracklist);
	var trackBoxList = document.querySelectorAll('.track-box');
	
	trackBoxList.forEach(function(element){
		element.classList.remove('active-track')
	})	
	favoriteTracksPlaylist.classList.remove('active-track');
	
	allTracksPlaylist.classList.add('active-track');
})



favoriteTracksPlaylist.addEventListener('click', function(){
	ajax('http://localhost:3000/playlists-tracks/favorites', 'GET', createTracklist)
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
			changeTrackHeader();
        })
    });
}



function changeTrackHeader(){
	currentTrackTitle.innerHTML = serverTracklist[currentTrack].title;
	currentTrackArtist.innerHTML = '(' + serverTracklist[currentTrack].artist + ')';
}



function playTrack(){
	sourceSong.setAttribute('src', serverTracklist[currentTrack].path)
	sourceSong.play();
	highlight();
}



function highlight(){
	// serverTracklistList.forEach(function (element){
	// 	element.classList.remove('active')
	// })
	// serverTracklistList[currentTrack].classList.add('active');
	var songBoxList = document.querySelectorAll('.song-box');
	songBoxList.forEach(function (element){
		element.classList.remove('active')
	})
	songBoxList[currentTrack].classList.add('active');
}



sourceSong.addEventListener('ended', function(){
	if (currentTrack === serverTracklist.length -1){
		currentTrack = 0;
	} else if (shuffle.className === 'shuffle on'){
		var randomIndex = Math.floor(Math.random()*(serverTracklist.length - 1)); 
		currentTrack = randomIndex;
		playTrack();
		changeTrackHeader();
	} else {
		currentTrack++;
	}
	playTrack()
	changeTrackHeader();
});



function addNewPlaylist(){
	var newPlaylistName = prompt("What's the name of your new playlist?");
	postToServer(newPlaylistName, 'http://localhost:3000/playlists', createPlaylist);
}
blackPlus.addEventListener('click', addNewPlaylist)



function jumbBack(){
	// prevSong.src = '/img/clicked-rewind-back.svg'
	if (currentTrack === 0){
		currentTrack = serverTracklist.length -1;
	} else {
		currentTrack--;
	}
	playTrack();
	changeTrackHeader();
}
prevSong.addEventListener('click', jumbBack)



function jumbForward(){
	if (currentTrack === serverTracklist.length -1){
		currentTrack = 0;
	} else {
		currentTrack++;
	}
	playTrack();
	changeTrackHeader();
}
nextSong.addEventListener('click', jumbForward)



var shuffleSongs = function() {
	shuffle.classList.toggle('on');	
    // var randomIndex = Math.floor(Math.random()*(serverTracklist.length - 1)); 
	// currentTrack = randomIndex;
	// playTrack();
	// changeTrackHeader();
	// if (shuffle.className === 'shuffle on'){
	// 	// shuffle.setAttribute('src', '/img/polip.png')
	// 	shuffle.style.backgroundImage = 'url(img/polip.PNG)';
		// shuffle.style.zIndex = '5';
	// }
}  
shuffle.addEventListener('click', shuffleSongs)


// function shuffleSongs() {
// 
//     var counter = serverTracklist.length;
// 	
//     // While there are elements in the array
// 	var shuffledList = [];
//     while (counter > 0) {
//         // Pick a random index
//         var index = Math.floor(Math.random() * counter);
// 	
//         // Decrease counter by 1
//         counter--;
// 	
//         // And swap the last element with it
//         var temp = serverTracklist[counter];
//         serverTracklist[counter] = serverTracklist[index];
//         serverTracklist[index] = temp;
// 		shuffledList.push(temp)	
// 	}
// 	createTracklist(shuffledList);
// 	playTrack();
// 	changeTrackHeader();
// }
// shuffle.addEventListener('click', shuffleSongs)


ajax('http://localhost:3000/playlists', 'GET', createPlaylist);












