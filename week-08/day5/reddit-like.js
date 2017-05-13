var classNumber = 0;
var requestedData;
var id;
var body = document.querySelector('body');
var postFormContainer = document.querySelector('.post-form-container');
var newPostBut = document.querySelector('.new-post');

var reloadPage = function(){
    document.location.href = 'file:///D:/greenfox/PamelaPaprasz/week-08/day5/reddit-like.html';
}


function getFromServer(callback) {
	var xhr = new XMLHttpRequest();
	method = "GET";

	xhr.open(method, 'https://time-radish.glitch.me/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            requestedData = requestedData.posts;
            console.log(requestedData);
            callback(requestedData);
		}
	}
	xhr.send();
}


function getNewPostFromServer(callback) {
	var xhr = new XMLHttpRequest();
	method = "GET";

	xhr.open(method, 'https://time-radish.glitch.me/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            var lastPostData = requestedData.posts[requestedData.posts.length -1];
            console.log(lastPostData);
            callback(lastPostData);
		}
	}
	xhr.send();
}

function postToServer(givenTitle, givenUrl, callback) {
	var xhr = new XMLHttpRequest();
	method = "POST";

	xhr.open(method, 'https://time-radish.glitch.me/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            callback(newPostCreator);
		}
	}
    var data = {
        title: givenTitle,
        href: givenUrl
    }
	xhr.send(JSON.stringify(data));
}

var dateAndTimeDesign = function(){
    var currentTime = Date.now();
    var currentSec = parseInt(currentTime / 1000);
    var timePassedBy = currentSec - requestedData.posts.timestamp;
    return timePassedBy;
}

var postForm = function(){
    
    var newUrlLabel = document.createElement('label');
    newUrlLabel.setAttribute('class', 'url-label');
    newUrlLabel.innerHTML = 'Url';
    postFormContainer.appendChild(newUrlLabel);
    
    var newUrlInput = document.createElement('input');
    newUrlInput.setAttribute('class', 'url-input')
    postFormContainer.appendChild(newUrlInput);
    
    var newTitleLabel = document.createElement('label');
    newTitleLabel.setAttribute('class', 'title-label');
    newTitleLabel.innerHTML = 'Title';
    postFormContainer.appendChild(newTitleLabel);
    
    var newTitleInput = document.createElement('input');
    newTitleInput.setAttribute('class', 'title-input');
    postFormContainer.appendChild(newTitleInput);
    
    var sendPostBut = document.createElement('button');
    sendPostBut.setAttribute('class', 'send-post');
    sendPostBut.innerHTML = 'submit';
    postFormContainer.appendChild(sendPostBut);
    
    sendPostBut.addEventListener('click', function(){
        postToServer(newTitleInput.value, newUrlInput.value, getNewPostFromServer);
        postFormContainer.style.display = 'none';
    });
}

newPostBut.addEventListener('click', postForm);
getFromServer(postCreator);