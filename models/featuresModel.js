// superAdminModel.js
const mongoose = require('mongoose');

const FeatureSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    bannerimage: {
        type: String,
        required: true,
    },
    shortdesc: {
        type: String,
        required: true,
    },
    maindesc: {
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

const Feature = mongoose.model('Feature', FeatureSchema);
module.exports = { Feature };