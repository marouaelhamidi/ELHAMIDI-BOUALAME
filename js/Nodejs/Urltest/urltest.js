var url=require('url');
var adr ='https://www.google.com/search?a=maroua&b=kenza'
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.hostname);
console.log(q.search);

var qdata=q.query;
console.log(qdata);
console.log(qdata.a);





