var http = require('http');

// Create a server object
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
	
    res.statusCode = 200;
    
	// http header
    res.setHeader('Content-Type', 'text/plain');
	// res.writeHead(200, {'Content-Type': 'text/html'});
	
	var url = req.url;
	
	if(url ==='/about') {
		res.write(' Welcome to about us page');
		res.end();
	}
	else if(url ==='/contact') {
		res.write(' Welcome to contact us page');
		res.end();
	}
	else {
		res.write('Hello World!');
		res.end();
	}
});

server.listen(port,hostname,() => {
	
	// The server object listens on port 3000
	console.log(`Server running at  http://${hostname}:${port}/`);
});
