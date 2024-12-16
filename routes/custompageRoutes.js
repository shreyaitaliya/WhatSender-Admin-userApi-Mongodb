const express = require('express');
const routes = express.Router();

const CustompageController = require('../controllers/custompageController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, CustompageController.AddCustompage);

routes.get('/', CustompageController.GetAllData);

routes.get('/:id', CustompageController.GetById);

routes.put('/:id', CustompageController.Update);

routes.delete('/:id', CustompageController.Delete);

module.exports = routes