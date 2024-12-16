const express = require('express');
const routes = express.Router();

const MenuController = require('../controllers/menuController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, MenuController.AddMenu);

routes.get('/', MenuController.GetAllData);

routes.get('/:id', MenuController.GetById);

routes.put('/:id', MenuController.Update);

routes.delete('/:id', MenuController.Delete);

module.exports = routes