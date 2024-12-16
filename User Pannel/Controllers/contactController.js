const { Contact } = require('../models/contactModel');
const { ContactGroup } = require('../models/contactgroupModel');

// Add Contact
const AddContact = async (req, res) => {
    try {
        const { username, wpnumber, groupID } = req.body;
        const createdBy = req.user.name

        const FindGroup = await ContactGroup.findOne({ _id: groupID });
        if (!FindGroup) {
            return res.status(400).send({
                success: false,
                message: 'ContactGroup Can Not Find...'
            })
        }

        const Data = await Contact.create({ username, wpnumber, groupID, createdBy });

        return res.status(200).send({
            success: false,
            message: 'Contact Create Successfully..',
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
        const Data = await Contact.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Contact Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Contact Viewed Successfully..',
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

        const Data = await Contact.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Contact Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Contact Viewed Successfully..',
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
        const { username, wpnumber, groupID } = req.body;

        const FindGroup = await ContactGroup.findOne({ _id: groupID });
        if (!FindGroup) {
            return res.status(400).send({
                success: false,
                message: 'ContactGroup Can Not Find...'
            })
        }

        const Data = await Contact.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Contact Not Found..'
            })
        }

        const Update = await Contact.findByIdAndUpdate(id, { username, wpnumber, groupID }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Contact Updated Successfully..',
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

        const Data = await Contact.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Contact Not Found..'
            })
        }

        const Delete = await Contact.findByIdAndDelete(id)

        return res.status(200).send({
            success: true,
            message: 'Contact Deleted Successfully..',
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
    AddContact, GetAllData, GetByID, Update, Delete
})