var http = require('http');
var url = require('url');  
var fs = require('fs');
http.createServer(function (request, response) {
    // response.writeHead(200, {'Content-Type': 'text/html'}); // http header
    
    // get path and query from url
    var path = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    let queryData = url.parse(request.url).query;
    console.log(path,query,queryData);
switch (path) {  
        case '/':  
            var path = '/index.html';
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error + query);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end(query);  
                }  
            }); 
            break;  
        case '/index.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end("data");  
                }  
            });  
            break;  
        case '/about.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end(query);  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
}).listen(1400);