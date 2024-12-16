const express = require('express');
const routes = express.Router();

const TagController = require('../controllers/TagController');

// TOKEN
const AdminToken = require('../midelware/adminToken');

routes.post('/', AdminToken, TagController.AddTag);

routes.get('/', TagController.GetAllTag);

routes.get('/:id', TagController.GetByID);

routes.put('/:id', TagController.Update);

routes.delete('/:id', TagController.Delete);

module.exports = routes 