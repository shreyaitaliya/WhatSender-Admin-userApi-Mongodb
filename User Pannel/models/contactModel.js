// superAdminModel.js
const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    wpnumber: {
        type: Number,
        required: true,
    },
    groupID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactGroup',
        required: true
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

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = { Contact };