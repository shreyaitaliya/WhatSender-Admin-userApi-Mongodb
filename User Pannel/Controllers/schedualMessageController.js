const { SchedualMessage } = require('../models/scheduledmessageModel');
const { ContactGroup } = require('../models/contactgroupModel');
const moment = require('moment');

// Add Schedual
const AddSchedual = async (req, res) => {
    try {
        const { name, number, groupID, date, messagingtype, message } = req.body;
        const createdBy = req.user.name;

        const FindGroup = await ContactGroup.findOne({ _id: groupID });
        if (!FindGroup) {
            return res.status(400).send({
                success: false,
                message: ' ContactGroup Id Invalid..'
            })
        }

        let formattedEndtime;
        if (date) {
            // Assuming endtime includes both date and time (e.g., "2024-12-16 14:30:00")
            formattedEndtime = moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");

            // Validate if the formatted date-time is valid
            if (!moment(formattedEndtime, "YYYY-MM-DD", true).isValid()) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid date-time format for date. Please provide a valid date-time in YYYY-MM-DD format.'
                });
            }
        }

        const Data = await SchedualMessage.create({ name, number, groupID, date: formattedEndtime, messagingtype, message, createdBy })

        return res.status(200).send({
            success: false,
            message: 'Schedual Created Successfully..',
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
        const Data = await SchedualMessage.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Schedual Not Found...'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Schedual Viewed Successfully..',
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
        const Data = await SchedualMessage.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Schedual Not Found...'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Schedual Viewed Successfully..',
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
        const { name, number, groupID, date, messagingtype, message } = req.body;

        const Data = await SchedualMessage.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Schedual Not Found...'
            })
        }

        const FindGroup = await ContactGroup.findOne({ _id: groupID });
        if (!FindGroup) {
            return res.status(400).send({
                success: false,
                message: ' ContactGroup Id Invalid..'
            })
        }

        let formattedEndtime;
        if (date) {
            // Assuming endtime includes both date and time (e.g., "2024-12-16 14:30:00")
            formattedEndtime = moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");

            // Validate if the formatted date-time is valid
            if (!moment(formattedEndtime, "YYYY-MM-DD", true).isValid()) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid date-time format for date. Please provide a valid date-time in YYYY-MM-DD format.'
                });
            }
        }

        const updatedData = await SchedualMessage.findByIdAndUpdate(id, { name, number, groupID, date: formattedEndtime, messagingtype, message }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'Schedual Updated Successfully..',
            updatedData
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
        const { name, number, groupID, date, messagingtype, message } = req.body;

        const Data = await SchedualMessage.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Schedual Not Found...'
            })
        }

        const Delete = await SchedualMessage.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Schedual Deleted Successfully..',
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddSchedual, GetAllData, GetById, Update, Delete })