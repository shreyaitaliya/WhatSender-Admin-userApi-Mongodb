const { Subscription } = require('../models/subscriptionModel');

// Add Subscription
const AddSubscription = async (req, res) => {
    try {
        const { planname, duration, price, labelcolor, messagelimit, devicelimit, templatelimit, applimit, chatbox, bulkmessage, schedualmessage, chatlimitaccess, grouplimitaccess } = req.body;
        const createdBy = req.user.name;

        const Data = await Subscription.create({ planname, duration, price, labelcolor, messagelimit, devicelimit, templatelimit, applimit, chatbox, bulkmessage, schedualmessage, chatlimitaccess, grouplimitaccess, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Subscription Created Successfully..',
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
        const Data = await Subscription.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Subscription Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Subscription Viewed Successfully..',
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

        const Data = await Subscription.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Subscription Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Subscription Viewed Successfully..',
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
        const { planname, duration, price, labelcolor, messagelimit, devicelimit, templatelimit, applimit, chatbox, bulkmessage, schedualmessage, chatlimitaccess, grouplimitaccess } = req.body;

        const Data = await Subscription.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Subscription Not Found..'
            })
        }

        const Update = await Subscription.findByIdAndUpdate(id, { planname, duration, price, labelcolor, messagelimit, devicelimit, templatelimit, applimit, chatbox, bulkmessage, schedualmessage, chatlimitaccess, grouplimitaccess }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Subscription Updated Successfully..'
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

        const Data = await Subscription.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Subscription Not Found..'
            })
        }

        const Delete = await Subscription.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Subscription Deleted Successfully..'
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddSubscription, GetAllData, GetByID, Update, Delete })