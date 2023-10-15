//site
let site = '';
for (var i = 1; i< arrSite.length; i++) {
var active1 = '<a href="main.html?x='+x+'&s='+i+'&p=1&page=1">'+arrName[i]+'</a>';
var active2 = '<a href="main.html?x='+x+'&s='+s+'&p=1&page=1">'+arrName[i]+'</a>';
var active3 = '<a class="active">'+arrName[i]+'</a>';
var ganti = active1.split(active2).join(active3);
site += ganti;
}
document.getElementById("site").innerHTML = site;
//proxy
var x1 = 'Proxy: <a href="?x=1&s='+s+'">Y</a>/N';
var x2 = 'Proxy: Y/<a href="?x=0&s='+s+'">N</a>';
if (x == 1){var useX = x2;}else{var useX = x1;}
let useProxy = useX;
document.getElementById("x").innerHTML = useProxy;