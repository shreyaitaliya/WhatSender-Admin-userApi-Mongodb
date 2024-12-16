// superAdminModel.js
const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    menuname: {
        type: String,
        required: true,
    },
    menuposition: {
        type: String,
        required: true,
    },
    languageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Draft'],
        default: 'Active',
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

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = { Menu };