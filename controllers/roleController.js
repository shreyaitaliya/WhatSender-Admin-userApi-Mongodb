const { Role } = require('../models/roleModel');

// AddRole
const AddRole = async (req, res) => {
    try {
        const { rolename, permissions } = req.body;
        const createdBy = req.user.name;

        if (!Array.isArray(permissions)) {
            return res.status(400).json({ message: 'Input must be an array of objects' });
        }

        const Data = await Role.insertMany({ rolename, permissions, createdBy });

        return res.status(400).send({
            success: true,
            message: 'Role Created Successfully..',
            Data
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false.valueOf,
            message: error.message
        })
    }
}

// GetAllData
const GetAllData = async (req, res) => {
    try {
        const Data = await Role.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Role Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Role Viewed Successfully..',
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
        const Data = await Role.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Role Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Role Viewed Successfully..',
            Data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({

        })
    }
}

// Update
const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { rolename, permissions } = req.body;

        if (!Array.isArray(permissions)) {
            return res.status(400).json({ message: 'Input must be an array of objects' });
        }

        const Data = await Role.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Role Not Found..'
            })
        }

        const Update = await Role.findByIdAndUpdate(id, { rolename, permissions }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Role Updated Successfully..',
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

        const Data = await Role.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Role Not Found..'
            })
        }

        const Delete = await Role.findByIdAndDelete(id)

        return res.status(200).send({
            success: true,
            message: 'Role Deleted Successfully..',
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
    AddRole, GetAllData, GetByID, Update, Delete
})