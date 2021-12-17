const http = require('http');
const fs=require('fs');



http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url=='/home'|| req.url =='/'){
        let data = fs.readFileSync('Static/index.html');
        res.write(data);

    }

  
}).listen(2000, () => {console.log('Server started')});