axios.get("https://powerful-meadow-70512.herokuapp.com/user/all")
.then((response) => {
	console.log(response.data[0]);
}).catch((erro) => {
	console.log(erro)
});