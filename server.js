const express = require('express');

const RecipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send('<h3> Node DB IV Challenge </h3>')
});

module.exports = server;