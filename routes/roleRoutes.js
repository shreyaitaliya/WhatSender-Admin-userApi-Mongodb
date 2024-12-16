const express = require('express');
const routes = express.Router();

const RoleController = require('../controllers/roleController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, RoleController.AddRole);

routes.get('/', RoleController.GetAllData);

routes.get('/:id', RoleController.GetByID);

routes.put('/:id', RoleController.Update);

routes.delete('/:id', RoleController.Delete);

module.exports = routes;