const express = require('express');
const path = require('path');
const server = express();
const routes = require('./routes');

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.use(routes)

server.listen(3333, () => {
    console.log("rodando na porta 3333");
})