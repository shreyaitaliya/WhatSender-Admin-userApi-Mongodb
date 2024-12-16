const { Tag } = require('../models/tagModel');
const { Language } = require('../models/languageModel');

// Add Tag
const AddTag = async (req, res) => {
    try {
        const { title, status, languageID } = req.body;
        const createdBy = req.user.name;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const data = await Tag.create({ title, status, languageID, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Tag Created Successfully',
            data
        });

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        });
    }
};

// View tag
const GetAllTag = async (req, res) => {
    try {
        const data = await Tag.find({});
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Tag Data Can Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Tag Data Viewed Successfully..',
            data
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
        const data = await Tag.findById(id);
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Tag Data Can Not Found...'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Tag Data Find Successfully..',
            data
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
        const { title, status, languageID } = req.body;

        const data = await Tag.findById(id);
        if (!data) {
            return res.status(400).send({
                success: false,
                message: error.message
            })
        }

        const update = await Tag.findByIdAndUpdate(id, { title, status, languageID }, { new: true });

        return res.status(200).send({
            success: true,
            message: 'Tag Updated Successfully..',
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
        const data = await Tag.findById(id);
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Tag Data Can Not Found..'
            })
        }
        const Delete = await Tag.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Tag Deleted Successfully..'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = { AddTag, GetAllTag, GetByID, Update, Delete };
