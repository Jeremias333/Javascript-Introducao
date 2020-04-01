
var nome = "Jeremias333";
var url = "https://api.github.com/users/"+nome+"/repos";
var mainContainer = document.querySelector("#mainContainer");
var inputElement = document.createElement("input");
var buttonElement = document.createElement("button");
var textoBotao = document.createTextNode("Procurar Repositório");

function gerarComponentes(){

	buttonElement.id = "botao";
	buttonElement.appendChild(textoBotao);

	inputElement.name = "nome";
	inputElement.type = "text";
	inputElement.placeholder = "digite o nome";

	mainContainer.appendChild(inputElement);
	mainContainer.appendChild(buttonElement);
}

gerarComponentes();

function verificar(){
	var valor = inputElement.value;
	if(valor.lenght >= 1){	
		
	}else{
		alert("Por favor digite o nome do usuário para busca do repositório");
	}
}

buttonElement.onclick = () => {
	verificar();
}