const { MessageReply } = require('../models/messagereplyModel')
const { Device } = require('../models/deviceModel');

// Add MessageReply 
const AddMessageReply = async (req, res) => {
    try {
        const { keyword, deviceID, replytype, keywordtype, reply } = req.body;
        const createdBy = req.user.name;

        const FindDevice = await Device.findOne({ _id: deviceID })
        if (!FindDevice) {
            return res.status(400).send({
                success: false,
                message: 'Device Id Invalid..'
            })
        }

        const Data = await MessageReply.create({ keyword, deviceID, replytype, keywordtype, reply, createdBy });

        return res.status(200).send({
            success: false,
            message: 'Message Reply Created Successfully..',
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
        const Data = await MessageReply.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'MessageReply Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'MessageReply Viewed Successfully..',
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
        const Data = await MessageReply.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'MessageReply Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'MessageReply Viewed Successfully..',
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
        const { keyword, deviceID, replytype, keywordtype, reply } = req.body;

        const FindDevice = await Device.findOne({ _id: deviceID })
        if (!FindDevice) {
            return res.status(400).send({
                success: false,
                message: 'Device Id Invalid..'
            })
        }

        const Data = await MessageReply.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'MessageReply Not Found..'
            })
        }

        const Update = await MessageReply.findByIdAndUpdate(id, { keyword, deviceID, replytype, keywordtype, reply }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'MessageReply Updated Successfully..',
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

        const Data = await MessageReply.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'MessageReply Not Found..'
            })
        }

        const Delete = await MessageReply.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'MessageReply Deleted Successfully..',
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddMessageReply, GetAllData, GetByID, Update, Delete })