const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'api.js':req.url
    )
    
    let extname = path.extname(filePath);
    let contentType = 'text/html';
        
    switch(extname) {        
        case '.js':
            contentType = 'text/javascript';
            break        
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {        
        if(req.url==='/people'){            
            fs.readFile(__dirname + '/public/api.js','utf-8',(err, data)=>{
                res.writeHead(200,{"Content-Type":"text/javascript"});               
                res.end(data);  
            });
            
        }                
    });    

});



const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('listening on port 3000');
});