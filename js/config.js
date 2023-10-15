var fetchArrCat = 'https://'+target+'/wp-json/wp/v2/categories?per_page=50&page=1';
var fetchCat = 'https://'+target+'/wp-json/wp/v2/posts?categories='+cat+'&per_page=9&page='+page;
var fetchUrl = 'https://'+target+'/wp-json/wp/v2/posts?per_page=9&page='+page;
var fetchId = 'https://'+target+'/wp-json/wp/v2/posts/'+id;
var proxy = ['', 'https://api.codetabs.com/v1/proxy/?quest='];
if(c){var c = c; var ifCat = 'c='+c+'&cat='+cat+'&';}else{var c = 1; var ifCat ='';}
var ifT = '&t='+t;
if (p) {var p = p}else{var p = 1}
if (t) {var t = ifT}else{var t = ''}
if (id){var ifId = 'id='+id+'&';}else{var ifId = '';}
var nextPage = '<a href="?x='+x+'&s='+s+'&'+ifCat+ifId+'p='+p+'&page='+(page*1+1)+ifT+ifT+'">NEXT &raquo;</a>';
var prev = '<a href="?x='+x+'&s='+s+'&'+ifCat+ifId+'p='+p+'&page='+(page*1-1)+'">&laquo; PREV</a>';
if (page <= 1){ var prevPage = '&laquo; PREV'; }else{ var prevPage = prev; }
let paging = '<div>Page: '+page+'</div>';
paging += prevPage+' | '+nextPage;