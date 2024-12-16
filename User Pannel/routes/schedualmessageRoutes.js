const express = require('express');
const routes = express.Router();

// SchedualMessageController
const SchedualmessageController = require('../Controllers/schedualMessageController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, SchedualmessageController.AddSchedual);

routes.get('/', SchedualmessageController.GetAllData);

routes.get('/:id', SchedualmessageController.GetById);

routes.put('/:id', SchedualmessageController.Update);

routes.delete('/:id', SchedualmessageController.Delete);

module.exports = routes