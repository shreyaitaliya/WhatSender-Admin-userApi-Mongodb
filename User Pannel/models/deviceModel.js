// superAdminModel.js
const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    devicename: {
        type: String,
        required: true,
    },
    webhookurl: {
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

const Device = mongoose.model('Device', DeviceSchema);
module.exports = { Device };