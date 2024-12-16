const { Notification } = require('../models/notificationModel');

// Add Notification
const AddNotification = async (req, res) => {
    try {
        const { email, title, description, actionlink } = req.body;
        const createdBy = req.user.name;

        const Data = await Notification.create({ email, title, description, actionlink, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Notification Created Successfully..',
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
        const Data = await Notification.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Notification Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Notification viewed Successfully..',
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
const GetByID = async (req, res) => {
    try {
        const id = req.params.id;

        const Data = await Notification.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Notification Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Notification viewed Successfully..',
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
        const { email, title, description, actionlink } = req.body;

        const Data = await Notification.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Notification Not Found..'
            })
        }

        const Update = await Notification.findByIdAndUpdate(id, { email, title, description, actionlink }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'Notification Updated Successfully..',
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

        const Data = await Notification.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Notification Not Found..'
            })
        }

        const Delete = await Notification.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Notification Deleted Successfully..'
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddNotification, GetAllData, GetByID, Update, Delete })