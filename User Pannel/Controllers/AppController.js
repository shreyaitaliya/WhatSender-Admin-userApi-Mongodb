const { App } = require('../models/AppModel');

// AddApp
const AddApp = async (req, res) => {
    try {
        const { number, appname, weblink } = req.body;
        const createdBy = req.user.name;

        const Data = await App.create({ number, appname, weblink, createdBy });

        return res.status(200).send({
            success: true,
            message: 'App created Successfully..',
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
        const Data = await App.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'App Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'App Viewed Successfully..',
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
const GetByID = async (req, res) => {
    try {
        const id = req.params.id;

        const Data = await App.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'App Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'App Viewed Successfully..',
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
        const { number, appname, weblink } = req.body;

        const Data = await App.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'App Not Found..'
            })
        }

        const Update = await App.findByIdAndUpdate(id, { number, appname, weblink }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'App Updated Successfully..',
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

        const Data = await App.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'App Not Found..'
            })
        }

        const Delete = await App.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'App Deleted Successfully..',
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
    AddApp, GetAllData, GetByID, Update, Delete
})