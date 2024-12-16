// superAdminModel.js
const mongoose = require('mongoose');

const PartnerSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'InActive'],
        default: 'Active',
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

const Partner = mongoose.model('Partner', PartnerSchema);
module.exports = { Partner };