const express = require('express');

const carsRouter = require('./cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req,res) => {
    return res.send('Welcome to my API!');
});


module.exports = server;