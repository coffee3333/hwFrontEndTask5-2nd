async function getResponse(){
	let json;
	let response = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (response) {
	  json = await response.json();
	} else {
	  alert("Ошибка HTTP: " + response.status);
	}
	return json;
}

function pageParser(json){
	var div = document.getElementById("resultBox");


	for (var key in json){
		var divWrapper = document.createElement("div");
		divWrapper.setAttribute('class', 'article-wrapper')
		var title = document.createElement("h2");
		var p = document.createElement("p")
		var titleText = document.createTextNode(json[key]['title']);
		var pText = document.createTextNode(json[key]['body']);
		title.appendChild(titleText);
		p.appendChild(pText);
		divWrapper.appendChild(title);
		divWrapper.appendChild(pText);
		div.appendChild(divWrapper);
	}
}

async function main(){
	var json = await getResponse();
	pageParser(json);
}

main();