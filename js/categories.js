let mainTitle = '<h3 class="center"><a href="main.html?x=0&s='+s+'&p=1&page=1">'+arrName[s].toUpperCase()+'</a> | '+decodeURIComponent(t).substring(3)+'</h3>';
document.getElementById("mainTitle").innerHTML = mainTitle;
//GET listCat
document.addEventListener("DOMContentLoaded", function() { getList(); })
function getList() {
	let listId = '';
	fetch(fetchCat)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.forEach(function(item){
			var id = item.id;
			var date = item.date;
			var titles = item.title.rendered;
			var title = titles.substring(0, 30);
			var content = item.content.rendered;
			document.getElementById("demo").innerHTML = content;
			var getImg = document.getElementsByTagName('img');
			var imgsrc = getImg[0].src;
			listId += '<li><a href="gallery.html?x=0&s='+s+'&c=2&cat='+cat+'&id='+id+'&p='+page+'&page=1'+ifT+'"><img class="lazyload" data-src="'+proxy[x]+imgsrc+'" alt="'+title+'" /><div class="overlay"><span>'+titles+'</span></div></a></li>';
		})
		listId += '';
		document.getElementById("demo").innerHTML = listId;
	})
	.catch(err => { console.log(err) });
}
document.getElementById("paging").innerHTML = paging;