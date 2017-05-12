var classNumber = 0;
var requestedData;
var body = document.querySelector('body');
var postFormContainer = document.querySelector('.post-form-container');
var newPostBut = document.querySelector('.new-post');

var postCreator = function(dataFromServer){
    dataFromServer.posts.forEach(function(element){
        classNumber++;
        var article = document.createElement('article');
        article.setAttribute('class', 'article');
        body.appendChild(article);    
        
        var rank = document.createElement('div');
        rank.setAttribute('class', 'rank');
        rank.innerHTML = classNumber;
        article.appendChild(rank);
        
        var upArrow = document.createElement('img');
        upArrow.setAttribute('src', 'upvote.png');
        upArrow.setAttribute('class', 'upvote');
        article.appendChild(upArrow);
        
        var voteNumber = document.createElement('div');
        voteNumber.setAttribute('class', 'vote')
        voteNumber.innerHTML = 0289;
        article.appendChild(voteNumber);
        
        var downArrow = document.createElement('img');
        downArrow.setAttribute('src', 'downvote.png');
        downArrow.setAttribute('class', 'downvote');
        article.appendChild(downArrow);
        
        var title = document.createElement('a');
        title.setAttribute('href', element.href);
        title.innerHTML = element.title;
        article.appendChild(title);
        
        var articleInfo = document.createElement('div');
        articleInfo.setAttribute('class', 'info');
        articleInfo.innerHTML = element.timestamp + ' ' + element.owner;
        article.appendChild(articleInfo);
        
        var modify = document.createElement('button');
        modify.setAttribute('class', 'modify'); 
        modify.innerHTML = 'modify';
        article.appendChild(modify);
        
        var remove = document.createElement('button');
        remove.setAttribute('class', 'remove');
        remove.innerHTML = 'remove';
        article.appendChild(remove);    
    })
}


function getFromServer(callback) {
	var xhr = new XMLHttpRequest(),
	method = "GET";

	xhr.open(method, 'https://time-radish.glitch.me/posts', true);
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

function postToServer(givenTitle, givenUrl, callback) {
	var xhr = new XMLHttpRequest(),
	method = "POST";

	xhr.open(method, 'https://time-radish.glitch.me/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            var requestedData = JSON.parse(xhr.response);
            callback(postCreator);
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

var postFormCreator = function(){
    
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
    postFormContainer.appendChild(sendPostBut);
    
    sendPostBut.addEventListener('click', function(){
        postToServer(newUrlInput.value, newTitleInput.value, getFromServer);
    });
}



newPostBut.addEventListener('click', postFormCreator);
getFromServer(postCreator);