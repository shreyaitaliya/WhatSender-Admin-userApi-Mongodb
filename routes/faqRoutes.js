const express = require('express');
const routes = express.Router();

const FaqController = require('../controllers/faqController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, FaqController.AddFaq);

routes.get('/', FaqController.GetAllData);

routes.get('/:id', FaqController.GetById);

routes.put('/:id', FaqController.Update);

routes.delete('/:id', FaqController.Delete);

module.exports = routes 