// superAdminModel.js
const mongoose = require('mongoose');

const SubscriptionSchema = mongoose.Schema({
    planname: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
        enum: {
            values: ['Monthly', 'Yearly'],
            message: 'Duration must be either Enable or Disable.'
        },
        default: 'Monthly',
    },
    price: {
        type: Number,
        required: true
    },
    labelcolor: {
        type: String,
        required: true
    },
    messagelimit: {
        type: Number,
        required: true
    },
    devicelimit: {
        type: Number,
        required: true
    },
    templatelimit: {
        type: Number,
        required: true
    },
    applimit: {
        type: Number,
        required: true
    },
    chatbox: {
        type: String,
        required: true,
        enum: {
            values: ['Enable', 'Disable'],
            message: 'Chatbox must be either Enable or Disable.'
        },
        default: 'Enable',
    },
    bulkmessage: {
        type: String,
        required: true,
        enum: {
            values: ['Enable', 'Disable'],
            message: 'BulkMessage must be either Enable or Disable.'
        },
        default: 'Enable',
    },
    schedualmessage: {
        type: String,
        required: true,
        enum: {
            values: ['Enable', 'Disable'],
            message: 'SchedualMessage must be either Enable or Disable.'
        },
        default: 'Enable',
    },
    chatlimitaccess: {
        type: String,
        required: true,
        enum: {
            values: ['Enable', 'Disable'],
            message: 'ChatLimitAccess must be either Enable or Disable.'
        },
        default: 'Enable',
    },
    grouplimitaccess: {
        type: String,
        required: true,
        enum: {
            values: ['Enable', 'Disable'],
            message: 'GroupLimitAccess must be either Enable or Disable.'
        },
        default: 'Enable',
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

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = { Subscription };