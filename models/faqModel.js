// superAdminModel.js
const mongoose = require('mongoose');

const FaqSchema = mongoose.Schema({
    questions: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
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

const Faq = mongoose.model('Faq', FaqSchema);
module.exports = { Faq };