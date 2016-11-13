window.onload =function() {

	word =document.getElementsByTagName('input')[0];
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

	var url = "request.php?q="+word.value;

	httprequest.onreadystatechange = processRequest;
	httprequest.open("GET", url);
	httprequest.send();
}

function processRequest() {

	var output =document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	response = httprequest.responseText;
		 	if (response.length <500) {
		 		output.innerHTML ='<h3> Result </h3>'+response;
			}
			else {
				response ='no result found';
				output.innerHTML ='<h3> Result </h3>'+response;
			}
		}
	}
}