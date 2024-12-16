const { ContactGroup } = require('../models/contactgroupModel');

// Add ContactGroup
const AddContactGroup = async (req, res) => {
    try {
        const { name } = req.body;
        const createdBy = req.user.name;

        const Data = await ContactGroup.create({ name, createdBy });

        return res.status(200).send({
            success: true,
            message: 'ContactGroup Created Successfully..',
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
        const Data = await ContactGroup.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Group Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Group Found Successfully..',
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

        const Data = await ContactGroup.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Group Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Group Found Successfully..',
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
        const { name } = req.body;

        const Data = await ContactGroup.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Group Not Found..'
            })
        }

        const Update = await ContactGroup.findByIdAndUpdate(id, { name }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Group Updated Successfully..',
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

        const Data = await ContactGroup.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Group Not Found..'
            })
        }

        const Delete = await ContactGroup.findByIdAndDelete(id)

        return res.status(200).send({
            success: true,
            message: 'Group Deleted Successfully..',
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddContactGroup, GetAllData, GetByID, Update, Delete })