const { Feature } = require('../models/featuresModel');
const { Language } = require('../models/languageModel');
const fs = require('fs');

// Add Feature
const AddFeature = async (req, res) => {
    try {
        const { title, shortdesc, maindesc, languageID } = req.body;
        const createdBy = req.user.name;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const image = req.files.image ? req.files.image[0].path : null;
        const bannerimage = req.files.bannerimage ? req.files.bannerimage[0].path : null;

        const Data = await Feature.create({ title, shortdesc, maindesc, languageID, image, bannerimage, createdBy })

        return res.status(200).send({
            success: true,
            message: 'Feature Craeted Successfully..',
            Data
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// GetAllData
const GetAllData = async (req, res) => {
    try {
        const Data = await Feature.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Feature Data Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Feature Data Viewed Successfully..',
            Data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// GetById
const GetById = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = await Feature.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Feature Data Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Feature Data Found Successfully..',
            Data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// Update
const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, shortdesc, maindesc, languageID } = req.body;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const Data = await Feature.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Feature Data Not Found..'
            })
        }

        const image = req.files.image ? req.files.image[0].path : Data.image;
        const bannerimage = req.files.bannerimage ? req.files.bannerimage[0].path : Data.bannerimage;

        const Update = await Feature.findByIdAndUpdate(id, { title, shortdesc, maindesc, languageID, image, bannerimage }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'Feature Updated Successfully..',
            Update
        })


    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// Delete
const Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const FindData = await Feature.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Feature Data Can Not Found..'
            })
        }

        if (FindData.image) {
            fs.unlink(FindData.image, (err) => {
                if (err) {
                    console.log('Error removing image:', err.message);
                } else {
                    console.log('Image file deleted successfully');
                }
            });
        }

        const Delete = await Feature.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Feature Data Deleted Successfully..'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({
    AddFeature, GetAllData, GetById, Update, Delete
})