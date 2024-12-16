// superAdminModel.js
const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'InActive'],
        default: 'Active',
    },
    languageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
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

const Tag = mongoose.model('Tag', TagSchema);
module.exports = { Tag };