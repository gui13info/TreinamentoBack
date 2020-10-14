const express = require('express');

const InfoController = require('./app/controllers/InfoController');
const EnderecoController = require('./app/controllers/EnderecoController');

const routes = express.Router();

routes.get('/', InfoController.index);

routes.post('/enderecos', EnderecoController.store);

module.exports = routes;