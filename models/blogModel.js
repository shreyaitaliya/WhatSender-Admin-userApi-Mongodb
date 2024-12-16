// superAdminModel.js
const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
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
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    tagID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    },
    languageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        required: true
    },
    metatitle: {
        type: String,
        required: true,
    },
    metaimage: {
        type: String,
        required: true,
    },
    metadesc: {
        type: String,
        required: true,
    },
    metatag: {
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

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = { Blog };