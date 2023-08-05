const http = require('https');
const port =8000;

const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running")
});

// creating the server and no request is made 