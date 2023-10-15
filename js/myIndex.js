let site = '';
for (var i = 1; i< arrSite.length; i++) {
	site += '<li><a href="main.html?x=0&s='+i+'&p=1&page=1"><img class="lazyload" data-src="images/cat/'+arrName[i]+'.jpg" alt="'+arrName[i]+'" /><div class="overlay"><span>'+arrName[i]+'</span></div></a></li>';
}
site += '';
document.getElementById("site").innerHTML = site;
function on() { document.getElementById("overlay").style.display = "block"; }
function off() { document.getElementById("overlay").style.display = "none"; }