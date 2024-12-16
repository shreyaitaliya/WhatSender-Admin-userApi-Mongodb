// superAdminModel.js
const mongoose = require('mongoose');

const TestimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);
module.exports = { Testimonial };