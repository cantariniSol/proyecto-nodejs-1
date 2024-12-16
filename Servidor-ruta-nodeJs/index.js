//Creando rutas con NodeJS 
// 1. Importar librería HTTP
const http = require('http')
//2.Importar lector de archivos 
const fs = require('fs');
// 3. Leer archivos html
const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');

const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(home);
    }else if(req.method === "GET" && req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(about);
    }else{
        res.writeHead(404, {'content-Type':'text/html'} );
        res.write('Page not found');
    }
    res.end();
});

// 4. Iniciar el servidor en puerto 8080
server.listen(8080, ()=>{
    console.log('Servidor escuchando en http://localhost:8080');
});