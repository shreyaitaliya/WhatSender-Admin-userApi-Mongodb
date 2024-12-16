const express = require('express');
const routes = express.Router();

// Device Routes
routes.use('/device', require('./deviceRoutes'))

// ContactGroup Routes
routes.use('/group', require('./contactgroupRoutes'))

// Contact Routes
routes.use('/contact', require('./contactRoutes'))

// App Routes
routes.use('/app', require('./appRoutes'))

// SchedualMessage Routes
routes.use('/schedual', require('./schedualmessageRoutes'))

// MessageReply Routes
routes.use('/messagereply', require('./messagereplyRoutes'))

module.exports = routes