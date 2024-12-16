//Creando Servidor con NodeJS
//1. Importar la librería HTTP
const http = require('http');
//Importar lector de archivos
const  fs = require('fs');
const html =  fs.readFileSync('./index.html')

//2. Crear el servidor
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    } else if (req.method === 'POST' && req.url === '/enviar') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Enviando información al Servidor!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('¡Ruta no encontrada!');
    }
});

//3. Iniciar el servidor en puerto 808
server.listen(8080, ()=>{
    console.log('Servidor escuchando en http://localhost:8080');
});

