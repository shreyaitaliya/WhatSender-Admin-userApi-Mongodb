const { Device } = require('../models/deviceModel')

// Add Device
const AddDevice = async (req, res) => {
    try {
        const { devicename, webhookurl } = req.body;
        const createdBy = req.user.name;

        const Data = await Device.create({ devicename, webhookurl, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Device Created Successfully..',
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
        const Data = await Device.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Device Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Device Viewed Successfully..',
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

        const Data = await Device.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Device Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Device Viewed Successfully..',
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
        const { devicename, webhookurl } = req.body;

        const Data = await Device.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Device Not Found..'
            })
        }

        const Update = await Device.findByIdAndUpdate(id, { devicename, webhookurl }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'Device Updated Successfully..',
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

        const Data = await Device.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false, 
                message: 'Device Not Found..'
            })
        }

        const Delete = await Device.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Device Deleted Successfully..'
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
    AddDevice, GetAllData, GetById, Update, Delete
})