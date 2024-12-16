// superAdminModel.js
const mongoose = require('mongoose');

const CustomPageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    metatitle: {
        type: String,
        required: true,
    },
    metadesc: {
        type: String,
        required: true,
    },
    metatag: {
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

const CustomPage = mongoose.model('CustomPage', CustomPageSchema);
module.exports = { CustomPage };