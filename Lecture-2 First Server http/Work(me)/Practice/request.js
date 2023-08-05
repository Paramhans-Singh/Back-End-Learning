const http = require('http');
const port = 8000;

const server = http.createServer(requestHandler);

function requestHandler(req,res){
   console.log(req.url);

   res.writeHead(200,{'content-type':'text/html'});
   res.end('<h1> Got! </h1>');
}

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running up on ",port);
});