const express = require('express');
const routes = express.Router();

//Login
routes.use('/login', require('./loginRoutes'));

// User
routes.use('/user', require('./userRoutes'));

// Tag
routes.use('/tag', require('./tagRoutes'));

// Category
routes.use('/category', require('./categoryRoutes'));

// Blog
routes.use('/blog', require('./blogRoutes'));

// Faq
routes.use('/faq', require('./faqRoutes'));

// Feature
routes.use('/feature', require('./featureRoutes'));

// Testimonial
routes.use('/testimonial', require('./testimonialRoutes'));

// Team
routes.use('/team', require('./teamRoutes'));

// Partner
routes.use('/partner', require('./partnerRoutes'));

// Custompage
routes.use('/custompage', require('./custompageRoutes'));

// Menu
routes.use('/menu', require('./menuRoutes'));

// Subscription
routes.use('/subscription', require('./subscriptionRoutes'));

// Notification
routes.use('/notification', require('./notificationRoutes'));

// Role
routes.use('/role', require('./roleRoutes'));

module.exports = routes