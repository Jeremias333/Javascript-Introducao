var checaIdade = function(idade){
	return new Promise((res, rej) => {
		console.log("Carregando...");
		setTimeout(function(){
			console.clear();
			if(idade >= 18){
				res();
			}else{
				rej("Rejeitado");
			}
		}, 2000);
	});
}



checaIdade(18).then(() => {
	console.log("Acesso ao site, você tem mais de 18");
}).catch((erro) => {
	console.warn("Acesso negado! menor que 18");
});