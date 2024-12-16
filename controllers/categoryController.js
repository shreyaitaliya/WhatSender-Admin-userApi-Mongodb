const { Category } = require('../models/categoryModel');
const { Language } = require('../models/languageModel');

// Add Category
const AddCategory = async (req, res) => {
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

        const data = await Category.create({ title, status, languageID, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Category Created Successfully',
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

// View Category
const GetAllData = async (req, res) => {
    try {
        const Data = await Category.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Category Data Can Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Category Data Viewed Successfully..',
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
        const Data = await Category.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Category Data Can Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Category Data Found Successfully..',
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
        const { title, status, languageID } = req.body;
        const FindData = await Category.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Category Can Not Found..'
            })
        }
        const update = await Category.findByIdAndUpdate(id, { title, status, languageID }, { new: true });
        return res.status(200).send({
            success: true,
            message: 'Category Data Updated Successfully..',
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
        const FindData = await Category.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: error.message
            })
        }
        const Delete = await Category.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Category Deleted Successfully..'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddCategory, GetAllData, GetByID, Update, Delete })