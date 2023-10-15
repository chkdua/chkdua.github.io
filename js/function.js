function getUrlVar() {
	var result = {};
	var location = window.location.href.split('#');
	var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { result [key] = value; });
	return result;
}
var page = getUrlVar()["page"];
var cat = getUrlVar()["cat"];
var id = getUrlVar()["id"];
var p = getUrlVar()["p"];
var c = getUrlVar()["c"];
var s = getUrlVar()["s"];
var x = getUrlVar()["x"];
var t = getUrlVar()["t"];
if(x){var x = x}else{var x = 0;}
if(s){var s = s}else{var s = 1}
if(page){var page = page}else{var page = 1}
var target = arrSite[s];