const { CustomPage } = require('../models/custompageModel');

// Add CustomPage
const AddCustompage = async (req, res) => {
    try {
        const { title, description, metatitle, metadesc, metatag } = req.body;
        const createdBy = req.user.name;

        const Data = await CustomPage.create({ title, description, metatitle, metadesc, metatag, createdBy });

        return res.status(200).send({
            success: true,
            message: 'CustomPage Created Successfully..',
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
        const Data = await CustomPage.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'CustomPage Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Custompage Found Successfully..',
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
const GetById = async (req, res) => {
    try {
        const id = req.params.id;

        const Data = await CustomPage.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'CustomPage Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Custompage Found Successfully..',
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
        const { title, description, metatitle, metadesc, metatag } = req.body;

        const FindData = await CustomPage.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'CustomPage Can Not Found..'
            })
        }

        const update = await CustomPage.findByIdAndUpdate(id, { title, description, metatitle, metadesc, metatag }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Custompage Updated Successfully..',
            update
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
        
        const FindData = await CustomPage.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'CustomPage Not Found..'
            })
        }
        const Delete = await CustomPage.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Custompage Deleted Successfully..'
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
    AddCustompage, GetAllData, GetById, Update, Delete
})