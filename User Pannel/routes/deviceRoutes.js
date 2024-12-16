const express = require('express');
const routes = express.Router();

// Device Controller
const DeviceController = require('../Controllers/deviceController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, DeviceController.AddDevice);

routes.get('/', DeviceController.GetAllData);

routes.get('/:id', DeviceController.GetById);

routes.put('/:id', DeviceController.Update);

routes.delete('/:id', DeviceController.Delete);

module.exports = routes