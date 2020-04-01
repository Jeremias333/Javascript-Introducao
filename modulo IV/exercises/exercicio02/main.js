var url = "https://api.github.com/users/";
var mainContainer = document.querySelector("#mainContainer");
var inputElement = document.createElement("input");
var buttonElement = document.createElement("button");
var olElement = document.createElement("ol");
var ulElement = document.createElement("ul");
var pElement = document.createElement("p");
var repositories = [];

function gerarComponentes(){
	var textoBotao = document.createTextNode("Procurar Repositório");
	var text = document.createTextNode("Carregando...");

	buttonElement.id = "botao";
	buttonElement.appendChild(textoBotao);

	inputElement.name = "nome";
	inputElement.type = "text";
	inputElement.placeholder = "digite o nome";

	mainContainer.appendChild(inputElement);
	mainContainer.appendChild(buttonElement);
	pElement.appendChild(text);
	mainContainer.appendChild(pElement);
	mainContainer.appendChild(olElement);

	pElement.hidden = true;

}

gerarComponentes();

function criarLista(){
	ulElement.innerHTML = "";
	for(repo of repositories){
		var liElement = document.createElement("li");
		var reposText = document.createTextNode(repo);

		liElement.appendChild(reposText);
		ulElement.appendChild(liElement);
	}

	olElement.appendChild(ulElement);
	repositories = [];
}

function organizarArray(respo){
	for(var i = 0; i < respo.length; i++){
		repositories[i] = respo[i].name;
	}
	criarLista();
}

function carregando(){
	pElement.hidden = false;
}

function carregado(){
	pElement.hidden = true;
}

function verificar(){
	carregando();
	var valor = inputElement.value;
	if(valor.length >= 1){
		var nome = valor;
		axios.get(url+nome+"/repos")
		.then((response) => {
			var respo = response.data;
			if(respo.length >= 1){
				carregado();
				organizarArray(respo);	
			}else{
				carregado();
				alert("Usuário não encontrado!");
			}
		}).catch((erro) => {
			alert("erro "+erro);
		});
	}else{
		alert("Por favor digite o nome do usuário para busca do repositório");
	}
}

buttonElement.onclick = () => {
	verificar();
}