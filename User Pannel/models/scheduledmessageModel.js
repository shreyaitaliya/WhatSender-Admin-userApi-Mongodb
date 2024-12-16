const mongoose = require('mongoose');

const SchedualMessageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    groupID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactGroup',
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    messagingtype: {
        type: String,
        required: true,
        enum: {
            values: ['Text Message', 'Template Message'],
            message: 'MessagingType must be either Enable or Disable.'
        },
        default: 'Text Message',
    },
    message: {
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

const SchedualMessage = mongoose.model('SchedualMessage', SchedualMessageSchema);
module.exports = { SchedualMessage };