// superAdminModel.js
const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    rolename: {
        type: String,
        required: true,
    },
    permissions: {
        type: [String],
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

const Role = mongoose.model('Role', RoleSchema);
module.exports = { Role };