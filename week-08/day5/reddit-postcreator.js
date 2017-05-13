var postCreator = function(dataFromServer){
    dataFromServer.forEach(function(element){
        classNumber++;
        id = element.id;
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
        voteNumber.innerHTML = parseInt(0);
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
        // setTimeout(reloadPage, 500);
        
        upArrow.addEventListener('click', function(){
    
            var xhr = new XMLHttpRequest();
            var url = 'https://time-radish.glitch.me/posts/' + element.id;
            mathod = 'PUT';

            xhr.open(method, url, true);
            xhr.setRequestHeader('Accept', 'application/json');
            
            voteNumber.innerHTML++;
            upArrow.setAttribute('src', 'upvoted.png');
            
            var upVoteData = {
                 "score": 1
            }
            xhr.send(JSON.stringify(upVoteData));
            // setTimeout(reloadPage, 500);
        });
        
        downArrow.addEventListener('click', function(){
    
            var xhr = new XMLHttpRequest();
            var url = 'https://time-radish.glitch.me/posts/' + element.id;
            mathod = 'PUT';

            xhr.open(method, url, true);
            xhr.setRequestHeader('Accept', 'application/json');
            
            voteNumber.innerHTML--;
            downArrow.setAttribute('src', 'downvoted.png');
            
            var downVoteData = {
                 "score": -1
            }
            xhr.send(JSON.stringify(downVoteData));
            // setTimeout(reloadPage, 500);
        });

        
        remove.addEventListener('click', function(){
            var xhr = new XMLHttpRequest();
            var url = 'https://time-radish.glitch.me/posts/'+ id;
            method = 'DELETE';
            
            xhr.open(method, url, true);

		    xhr.setRequestHeader('Accept', 'application/json');
		    xhr.send(); 
		    setTimeout(reloadPage, 500);
        });
    });
}
