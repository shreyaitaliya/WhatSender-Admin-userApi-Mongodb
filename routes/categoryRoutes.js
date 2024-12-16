const express = require('express');
const routes = express.Router();

const CategoryController = require('../controllers/categoryController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, CategoryController.AddCategory);

routes.get('/', CategoryController.GetAllData);

routes.get('/:id', CategoryController.GetByID);

routes.put('/:id', CategoryController.Update);

routes.delete('/:id', CategoryController.Delete);

module.exports = routes