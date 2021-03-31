var http = require('http');


http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<form action="file-upload" method="post" enctype="multipart/form-data">');
	res.write('</form');
	return res.end();
}).listen(8080);