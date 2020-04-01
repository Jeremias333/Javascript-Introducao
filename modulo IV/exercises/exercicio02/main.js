
var nome = "Jeremias333";
var url = "https://api.github.com/users/"+nome+"/repos";


function gerarComponentes(){
	var mainContainer = document.querySelector("#mainContainer");

	var inputElement = document.createElement("input");
	var buttonElement = document.createElement("button");

	buttonElement.id = "botao";

	var textoBotao = document.createTextNode("Procurar Repositório").
	buttonElement.appendChild(textoBotao);

	inputElement.name = "nome";
	inputElement.type = "text";
	inputElement.placeholder = "digite o nome";

	mainContainer.appendChild(inputElement);
	mainContainer.appendChild(buttonElement);
}

gerarComponentes();