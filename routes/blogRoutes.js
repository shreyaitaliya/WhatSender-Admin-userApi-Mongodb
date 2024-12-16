const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');

const BlogController = require('../controllers/blogController');
const TokenVerify = require('../midelware/adminToken');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
        if (extName && mimeType) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});


routes.post('/', TokenVerify, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'metaimage', maxCount: 1 }]), BlogController.AddBlog);

routes.get('/', BlogController.GetAllData);

routes.get('/:id', BlogController.GetByID);

routes.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'metaimage', maxCount: 1 }]), BlogController.Update);

routes.delete('/:id', BlogController.Delete);

module.exports = routes