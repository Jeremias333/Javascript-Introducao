//ajax - fazendo request

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://powerful-meadow-70512.herokuapp.com/user/all");
xhr.send(null);

xhr.onreadystatechange = () => {
	if(xhr.readyState === 4){
		console.log(JSON.parse(xhr.responseText));
	}
}