var http=require('http');
var fs=require('fs');
var server=http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('./public/index.html', function (err, data) {
        if (!err) res.end(data);
        else res.end('<h1>Erreur 404!</h1>')
    })
    
});
server.listen(5000);

//postman