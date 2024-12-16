const express = require('express');
const routes = express.Router();

// Subscription Controller
const SubscriptionController = require('../controllers/subscriptionController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, SubscriptionController.AddSubscription);

routes.get('/', SubscriptionController.GetAllData);

routes.get('/:id', SubscriptionController.GetByID);

routes.put('/:id', SubscriptionController.Update);

routes.delete('/:id', SubscriptionController.Delete);

module.exports = routes