// superAdminModel.js
const mongoose = require('mongoose');

const MessageReplySchema = mongoose.Schema({
    keyword: {
        type: String,
        required: true,
    },
    deviceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactGroup',
        required: true
    },
    replytype: {
        type: String,
        required: true,
        enum: {
            values: ['Plain Text', 'Template'],
            message: 'ReplyType must be either Enable or Disable.'
        },
        default: 'Plain Text',
    },
    keywordtype: {
        type: String,
        required: true,
        enum: {
            values: ['Whole Words', 'Similar Words'],
            message: 'KeywordType must be either Enable or Disable.'
        },
        default: 'Whole Words',
    },
    reply: {
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

const MessageReply = mongoose.model('MessageReply', MessageReplySchema);
module.exports = { MessageReply };