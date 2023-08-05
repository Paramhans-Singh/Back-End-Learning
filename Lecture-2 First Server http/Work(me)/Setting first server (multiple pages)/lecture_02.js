// License for open source github repos

// package.json will tell the configuration of the server 
// it is purely object value pair of javascript

const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res){
    console.log("this is the request url",req.url);
    //  every time when we reload the page url will be printed

    res.writeHead(200,{"content-type":"text-html"});

    // fs .readFile("./index.html",function(err,data){
    //     if(err){
    //         console.log('error',err);
    //         return res.end('<h1>Error!</h1>');
    //     }
    //     return res.end(data);
    // })

    let filePath;

    switch(req.url){
        case '/' :
            filePath="./index.html"
            break;

        case '/profile':
            filePath="./profile.html"
            break;    

        default :
            filePath="./404.html"
    }
    console.log("this is the file path",filePath);

     fs.readFile(filePath,function(err,data){
        if(err){
            console.log('This is the error while reading file',err);
            return  res.end('<h1>Error!</h1>');
        }
        return res.end(data);
     })

    // res.end('Got!');
    //  THIS WILL SHOW got on screen
    //  favicon is the small icon of website on top 
    //  response headers tell us what kind of responses are coming in 
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        //  if error comes then console statement 
        //  occurs otherwise below server statement
        console.log("Error in running the server",err);
        return;
    }
    console.log("Server is up and running on port: ",port)
});

//  port number 8000 address? ---> localhost or 127.0.0.1
//   127.0.0.1:8000 or localhost:8000 will load this server 
//  ctrl c is for kill the server 
