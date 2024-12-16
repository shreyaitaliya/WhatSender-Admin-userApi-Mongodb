const express = require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');

const FeatureController = require('../controllers/featureController');
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

routes.post('/', TokenVerify, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'bannerimage', maxCount: 1 }]), FeatureController.AddFeature);

routes.get('/', FeatureController.GetAllData);

routes.get('/:id', FeatureController.GetById);

routes.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'bannerimage', maxCount: 1 }]), FeatureController.Update);

routes.delete('/:id', FeatureController.Delete);


module.exports = routes