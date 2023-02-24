var listaEl = document.querySelector("#projetos ul");

var xhttp = new XMLHttpRequest();
var url_base = 'https://api.github.com/';

var lista = [];

function buscarRepo(){

	var url = url_base + 'users/luap95/repos';
	xhttp.open('GET', url);
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState === 4){
			if(xhttp.status === 200){
				var result = JSON.parse(xhttp.responseText);
				//console.log(result);
		
				lista = result.map(function(item){
					return { 
						name: item.name, 
						description: item.description, 
						html_url: item.html_url,
						languages_url: item.languages_url
					};
				});
				renderLista();
			}
		}
	}
}

function renderLista(){
	listaEl.innerHTML = '';

	for(item of lista){
        var imageEl = document.createElement("img");
        imageEl.src = converteUrl(item.html_url);
        listaEl.appendChild(imageEl);

		var nameEl = document.createElement('h3');
		nameEl.appendChild(document.createTextNode(item.name));

		var descriptionEl = document.createElement('p');
		descriptionEl.appendChild(document.createTextNode(item.description));

		var linguagemEl = document.createElement('p');
		linguagemEl.appendChild(document.createTextNode(item.languages_url));

		var urlEl = document.createElement('a');
		urlEl.setAttribute('href', item.html_url);
		urlEl.setAttribute('target', '_blank');
		urlEl.appendChild(document.createTextNode(item.html_url));

		var itemEl = document.createElement('li');
		itemEl.appendChild(nameEl);
		itemEl.appendChild(descriptionEl);
		itemEl.appendChild(urlEl);
		imageEl.appendChild(linguagemEl);
		listaEl.appendChild(itemEl);
	}
}

function converteUrl(url){
    url = url.replace("://","%3A%2F%2F");
    url = url.replaceAll("/", "%2F");
    return "https://iframely.net/api/thumbnail?url=" + url 
	+ "&api_key=22046443d087be8940f3c78ad638ec36"
;}