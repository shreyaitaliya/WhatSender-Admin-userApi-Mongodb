// superAdminModel.js
const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
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
    description: {
        type: String,
        required: true,
    },
    facebooklink: {
        type: String,
        required: true,
    },
    twitterlink: {
        type: String,
        required: true,
    },
    linkdinlink: {
        type: String,
        required: true,
    },
    instagramlink: {
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

const Team = mongoose.model('Team', TeamSchema);
module.exports = { Team };