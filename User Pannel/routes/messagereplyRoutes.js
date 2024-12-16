const express = require('express');
const routes = express.Router();

const MessageReplyController = require('../Controllers/messageReplyController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, MessageReplyController.AddMessageReply);

routes.get('/', MessageReplyController.GetAllData);

routes.get('/:id', MessageReplyController.GetByID);

routes.put('/:id', MessageReplyController.Update);

routes.delete('/:id', MessageReplyController.Delete);

module.exports = routes