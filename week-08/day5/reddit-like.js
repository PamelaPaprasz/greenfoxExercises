var classNumber = 0;
var body = document.querySelector('body');

var postCreator = function(){
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
    article.appendChild(voteNumber);
    
    var downArrow = document.createElement('img');
    downArrow.setAttribute('src', 'downvote.png');
    downArrow.setAttribute('class', 'downvote');
    article.appendChild(downArrow);
    
    var title = document.createElement('a');
    title.innerHTML = 'akarmibarmiamitakarszmajdausermegmondja'
    article.appendChild(title);
    
    var articleInfo = document.createElement('div');
    articleInfo.setAttribute('class', 'info');
    articleInfo.innerHTML = 'submitted 34 sec ago by Me';
    article.appendChild(articleInfo);
    
    var modify = document.createElement('button');
    modify.setAttribute('class', 'modify'); 
    modify.innerHTML = 'modify';
    article.appendChild(modify);
    
    var remove = document.createElement('button');
    remove.setAttribute('class', 'remove');
    remove.innerHTML = 'remove';
    article.appendChild(remove);
}

postCreator();
postCreator();