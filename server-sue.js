const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
const path = require('path');

const server = express();
server.use(cors());
server.use(express.static(path.join(__dirname, '/public')));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

server.use((req, res) => {
    res.redirect('/');
})

const httpServer = http.createServer(server);
const httpsServer = https.createServer(server);

httpServer.listen(3050, () => {
    console.log(`feeding nana on port 3050`);
})

httpsServer.listen(3051, () => {
    console.log('feeding nana securely on port 3051');
})