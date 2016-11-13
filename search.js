window.onload =function() {

	button =document.getElementsByTagName('input')[1];

	button.onclick =function() {
		ajaxFunction(); 
		searchRequest();
	}
};

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function searchRequest() {

	var url = "request.php?q=definition";
	httprequest.onreadystatechange = processSearch;
	httprequest.open("GET", url);
	httprequest.send();
}

function processSearch() {

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	response = httprequest.responseText;
		 	alert(response);
		}
		else 
			response ='Error Definition not found'
}