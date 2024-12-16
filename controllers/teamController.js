const { Team } = require('../models/teamModel');
const fs = require('fs');

// AddTeam
const AddTeam = async (req, res) => {
    try {
        const { name, position, description, facebooklink, twitterlink, linkdinlink, instagramlink } = req.body;
        const createdBy = req.user.name;

        const image = req.files.image ? req.files.image[0].path : FindBlog.image;

        const data = await Team.create({ name, position, image, description, facebooklink, twitterlink, linkdinlink, instagramlink, createdBy });

        return res.status(200).send({
            success: false,
            message: 'Team Created Successfully..',
            data
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
        const Data = await Team.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Team Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Team Viewed Successfully..',
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

        const Data = await Team.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Team Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Team Viewed Successfully..',
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
        const { name, position, description, facebooklink, twitterlink, linkdinlink, instagramlink } = req.body
        const Data = await Team.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Team Not Found..'
            })
        }

        const image = req.files.image ? req.files.image[0].path : Data.image;

        const Update = await Team.findByIdAndUpdate(id, { name, position, image, description, facebooklink, twitterlink, linkdinlink, instagramlink }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Team Updated Successfully..',
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
        const FindData = await Team.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Team Not Found..'
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

        const Delete = await Team.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Team Deleted Successfully..',
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddTeam, GetAllData, GetById, Update, Delete })