// superAdminModel.js
const mongoose = require('mongoose');

const ContactGroupSchema = mongoose.Schema({
    name: {
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

const ContactGroup = mongoose.model('ContactGroup', ContactGroupSchema);
module.exports = { ContactGroup };