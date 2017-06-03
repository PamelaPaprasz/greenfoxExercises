
var todoList = document.querySelector('.todo-list');
var inputField = document.querySelector('.add-todo');
var addButton = document.querySelector('.add-button');
var boxOfTodoText = document.querySelector('.todo');



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


function postToServer(url, method, userInput, callback){
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
	var data = {
		title: userInput,
		done: 0
	}
	xhr.send(JSON.stringify(data));
};

addButton.addEventListener('click', function(){
    postToServer('http://localhost:3000/todos', 'POST', inputField.value, createTodos);
    inputField.value = '';
});




function putToServer(url, method, doneStatus, callback){
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
	
	if (doneStatus === 0){
		var data = {
			done: 1
		}
	} else {
		var data = {
			done: 0
		}
	}
	xhr.send(JSON.stringify(data));
};




function createTodos(serverData) {
	todoList.innerHTML = '';
	
    serverData.forEach(function(element, index){
        
        var singleTodo = document.createElement('div');
        singleTodo.setAttribute('class', 'single-todo');
        todoList.appendChild(singleTodo);
        
        var boxOfTodoText = document.createElement('div');
        boxOfTodoText.setAttribute('class', 'todo');
        singleTodo.appendChild(boxOfTodoText);
		
        var todoTitle = document.createElement('div');
		if (element.done === 0){
			todoTitle.setAttribute('class', 'todo-title');
        } else {
            todoTitle.setAttribute('class', 'checked-title');        
        }
        todoTitle.innerHTML = element.title;
        boxOfTodoText.appendChild(todoTitle);
        
        var iconBox = document.createElement('div');
        iconBox.setAttribute('class', 'icon-box');
        singleTodo.appendChild(iconBox);
		
		var trashBin = document.createElement('div');
		trashBin.setAttribute('class', 'delete-todo');
		trashBin.setAttribute('id', element.id);
		iconBox.appendChild(trashBin);
        
        var checkBox = document.createElement('div');
        if (element.done === 0){
            checkBox.setAttribute('class', 'check-box');    
        } else {
            checkBox.setAttribute('class', 'checked-box');        
        }
        checkBox.setAttribute('id', element.id);
        iconBox.appendChild(checkBox);
        
        trashBin.addEventListener('click', function(){
			ajax('http://localhost:3000/todos/' + trashBin.id, 'DELETE', createTodos);
		})
        
        checkBox.addEventListener('click', function(){
            putToServer('http://localhost:3000/todos/' + checkBox.id, 'PUT', element.done, createTodos)
        })
    });
    
}


ajax('http://localhost:3000/todos', 'GET', createTodos);