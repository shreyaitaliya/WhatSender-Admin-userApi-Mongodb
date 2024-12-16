const express = require('express');
const routes = express.Router();

// ContactGroup Controller
const ContactGroupContaroller = require('../Controllers/contactgroupController');
const TokenVerify = require('../../midelware/adminToken');

routes.post('/', TokenVerify, ContactGroupContaroller.AddContactGroup);

routes.get('/', ContactGroupContaroller.GetAllData);

routes.get('/:id', ContactGroupContaroller.GetByID);

routes.put('/:id', ContactGroupContaroller.Update);

routes.delete('/:id', ContactGroupContaroller.Delete);

module.exports = routes