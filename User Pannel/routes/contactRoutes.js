const express = require('express');
const routes = express.Router();

const ContactController = require('../Controllers/contactController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, ContactController.AddContact);

routes.get('/', ContactController.GetAllData);

routes.get('/:id', ContactController.GetByID);

routes.put('/:id', ContactController.Update);

routes.delete('/:id', ContactController.Delete);

module.exports = routes