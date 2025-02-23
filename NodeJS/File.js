var fs = require('fs');
var http = require('http');
var url = require('url');
var adr = "http://localhost:8080/index.html?name=Rahul&month=january";
var q = url.parse(adr,true);


// // http.createServer(function(req,res){
// //     fs.readFile('index.html',function(err,data){
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         res.write(data);
// //         return res.end();
// //     })
// // }).listen(8080)

console.log(q.host);
console.log(q.pathname)
console.log(q.search)

var qd= q.query;
console.log(qd.name);