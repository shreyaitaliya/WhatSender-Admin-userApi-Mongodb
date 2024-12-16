// superAdminModel.js
const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
    },

});

const Admin = mongoose.model('Admin', AdminSchema);

const defaultData = [
    {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        role: 'admin',
    }
];

// Function to insert data if it doesn't already exist
async function insertDefaultData() {
    try {
        const count = await Admin.countDocuments();
        if (count === 0) {
            await Admin.create(defaultData);
            console.log('Default data inserted successfully.');
        } else {
            console.log('Data already exists, skipping insertion.');
        }
    } catch (error) {
        console.error('Error inserting default data:', error);
    }
}

module.exports = { Admin, insertDefaultData };