const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3001;

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'index/html');
    // res.end('<html><body><h1>This is an Express Server</h1></body></html>')
    res.end('Welcome to Server')
});

const server = http.createServer(app);

server.listen(port, hostname, (req, res) => {
    console.log(`Server running at http://${hostname}:${port}`);
})