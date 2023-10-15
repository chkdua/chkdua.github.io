//GET Categories
document.addEventListener("DOMContentLoaded", function() { getArrCat(); })
function getArrCat() {
	let arrCat = '<a href="index.html">Home</a> | ';
	fetch(fetchArrCat)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.forEach(function(item){
			var id = item.id;
			var count = item.count;
			var title = item.name;
			var active1 = '<a href="categories.html?x='+x+'&s='+s+'&c=1&cat='+id+'&p='+page+'&page=1&t='+title+'">'+title+' ('+count+')</a> | ';
			var active2 = '<a href="categories.html?x='+x+'&s='+s+'&c=1&cat='+cat+'&p='+page+'&page=1&t='+title+'">'+title+' ('+count+')</a> | ';
			var active3 = '<a id="categories.html?x='+x+'&s='+s+'&c=1&cat='+id+'&p='+page+'&page=1&t='+title+'"><span>'+title+' ('+count+')</span></a> | ';
			var ganti = active1.split(active2).join(active3);
			arrCat += ganti;
		})
		arrCat += '<hr><span>&copy; siDemPlon - 2023</span>';
		document.getElementById("category").innerHTML = arrCat;
	})
	.catch(err => { console.log(err) });
}