var minhaPromise = function(){
	return new Promise(function(resolve, rejected){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://powerful-meadow-70512.herokuapp.com/user/all");
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				}else{
					reject("Erro na requisição");
				}
			}
		}
	});
}

// var resultado = minhaPromise();//o js não vai esperar a promise ser executada para ir para próxima linha
//fica como uma promessa, ele segue o trajeto dela e quando a promisse tiver pronta será modificada.
// console.log(resultado);

minhaPromise()
.then(function(response){
	console.log(response);
}).catch(function(error) {
	console.warn(error);
});