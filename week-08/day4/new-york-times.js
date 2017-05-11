var request = new XMLHttpRequest();
var container = document.querySelector('div');

request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api_key=618a9ac7837546cfae6ac25904453305', true);
request.send();

request.onreadystatechange = function(){
    if (request.readyState === 4 && request.status === 200){
        var requestData = JSON.parse(request.response);
        postInfos(requestData.response.docs);
    }       
}

var postInfos = function(resultData){
    resultData.forEach(function(element){
        var soloContainer = document.createElement('div');
        container.appendChild(soloContainer);
        
        var header = document.createElement('h1');
        header.innerHTML = element.headline.main;
        soloContainer.appendChild(header);
        
        var snippet = document.createElement('p');
        snippet.innerHTML = element.snippet;
        soloContainer.appendChild(snippet);
        
        var publicDate = document.createElement('p');
        publicDate.innerHTML = element.pub_date;
        soloContainer.appendChild(publicDate);
        
        var permaLink = document.createElement('a');
        permaLink.innerHTML = 'link to the article';
        permaLink.setAttribute('href', element.web_url);
        soloContainer.appendChild(permaLink);        
    })
}
