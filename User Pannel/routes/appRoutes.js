const express = require('express');
const routes = express.Router();

// App Controller
const AppController = require('../Controllers/AppController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, AppController.AddApp);

routes.get('/', AppController.GetAllData);

routes.get('/:id', AppController.GetByID);

routes.put('/:id', AppController.Update);

routes.delete('/:id', AppController.Delete);

module.exports = routes