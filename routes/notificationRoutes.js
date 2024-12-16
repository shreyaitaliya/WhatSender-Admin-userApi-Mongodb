const express = require('express');
const routes = express.Router();

// Notification Controller
const NotificationController = require('../controllers/notificationController');
const TokenVerify = require('../midelware/adminToken');

routes.post('/', TokenVerify, NotificationController.AddNotification);

routes.get('/', NotificationController.GetAllData);

routes.get('/:id', NotificationController.GetByID);

routes.put('/:id', NotificationController.Update);

routes.delete('/:id', NotificationController.Delete);

module.exports = routes