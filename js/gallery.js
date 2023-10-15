let mainTitle = '<h3 class="center">'+arrName[s].toUpperCase()+' | '+decodeURIComponent(t).substring(3)+'</h3>';
document.getElementById("mainTitle").innerHTML = mainTitle;
//GET id
document.addEventListener("DOMContentLoaded", function() { getDataRender(); })
function getDataRender() {
	let rendered = '';
	fetch(fetchId)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		var titles = data.title.rendered;
		var contents = data.content.rendered;
		document.getElementById("demo").innerHTML = contents;
		var getImg = document.getElementsByTagName('img');
		var count = getImg.length;
		var size = 9;
		var start = (page*size-size);
		var stop = (size*page);
		var end = Math.ceil(count/size);
		if (page > end){
			rendered += '<li><img class="lazyload" data-src="images/404.png"></li>';
			}else{
			for (var i = start; i< stop; i++) {
				var imgsrc = getImg[i].src;
				rendered += '<li><a href="'+proxy[x]+imgsrc+'"><img class="lazyload" data-src="'+proxy[x]+imgsrc+'" alt="'+titles+'" /><div class="overlay"><span>'+titles+'</span></div></a></li>';
			}
		}
		document.getElementById("demo").innerHTML = rendered;
	 })
	 .catch(err => { console.log(err) });
}
document.getElementById("paging").innerHTML = paging;

let back = '';
if (c == 1){
back += '<a href=main.html?x='+x+'&s='+s+'&p=1&page='+p+'>&laquo; BACK</a>';
}else{
back += '<a href=categories.html?x='+x+'&s='+s+'&c=1&cat='+cat+'&p=1&page='+p+ifT+'>&laquo; BACK</a>';
}
document.getElementById("back").innerHTML = back;
/**/