var listElement = document.querySelector("#app ul");
var inputElement =  document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderizar(){
	listElement.innerHTML = "";
	for(todo of todos){
		var todoElement = document.createElement("li");
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement("a");

		linkElement.setAttribute("href", "#");

		var pos = todos.indexOf(todo);
		linkElement.setAttribute("onclick", "deleteTodo("+pos+")");

		var linkText = document.createTextNode("Excluir");

		linkElement.appendChild(linkText);

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		listElement.appendChild(todoElement);
	}
}

renderizar();

function addNovo(){
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = "";
	renderizar();
	saveToStorage();
}

function deleteTodo(pos){
	todos.splice(pos, 1);
	renderizar();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem("list_todos", JSON.stringify(todos));
}

buttonElement.onclick = () => {
	addNovo();
}