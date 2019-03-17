const express = require('express');
const httpShutdown = require('http-shutdown');
const path = require('path');
const app = express();
const config = require('./config');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, respond) => {
    respond.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Listen to port
const server = httpShutdown(app.listen(config.port, () => {
    console.log(`Web is listening on port ${config.port}`);
}));

server.host = `http://localhost:${config.port}`;

module.exports = server;