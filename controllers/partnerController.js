const { Partner } = require('../models/partnerModel');
const fs = require('fs');

// Add Partner
const AddPartner = async (req, res) => {
    try {
        const { url, type, status } = req.body;
        const createdBy = req.user.name;

        const image = req.files.image ? req.files.image[0].path : null;

        const Data = await Partner.create({ url, image, type, status, createdBy });
        return res.status(200).send({
            success: true,
            message: 'Partner Created Successfully..',
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
        const Data = await Partner.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Partner Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Partner Viewed Successfully..',
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

// GetByID
const GetById = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = await Partner.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Partner Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Partner Viewed Successfully..',
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
        const { url, type, status } = req.body;

        const Data = await Partner.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Partner Not Found..'
            })
        }

        const image = req.files.image ? req.files.image[0].path : Data.image;

        const update = await Partner.findByIdAndUpdate(id, { url, type, status, image }, { new: true });

        return res.status(200).send({
            success: false,
            message: 'partner Updated successfully..',
            update
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

        const FindData = await Partner.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Partner Not Found..'
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

        const Delete = await Partner.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Partner Deleted Successfully..'
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddPartner, GetAllData, GetById, Update, Delete })