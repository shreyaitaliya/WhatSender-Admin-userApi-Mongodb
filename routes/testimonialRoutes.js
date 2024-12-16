const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');

const TestimonialController = require('../controllers/testimonialController');
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

routes.post('/', TokenVerify, upload.fields([{ name: 'image', maxCount: 1 }]), TestimonialController.AddTestimonial);

routes.get('/', TestimonialController.GetByAllData);

routes.get('/:id', TestimonialController.GetByID);

routes.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }]), TestimonialController.Update);

routes.delete('/:id', TestimonialController.Delete);

module.exports = routes