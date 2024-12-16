const { Menu } = require('../models/menuModel');
const { Language } = require('../models/languageModel');

// Add Menu
const AddMenu = async (req, res) => {
    try {
        const { menuname, menuposition, languageID, status } = req.body;
        const createdBy = req.user.name;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const Data = await Menu.create({ menuname, menuposition, languageID, status, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Menu Created Successfully..',
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
        const Data = await Menu.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Menu Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Menu viewed successfully..',
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

        const Data = await Menu.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Menu Not Found..'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Menu Viewed successfully..',
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
        const { menuname, menuposition, languageID, status } = req.body;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const Data = await Menu.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Menu Not Found..'
            })
        }

        const Update = await Menu.findByIdAndUpdate(id, { menuname, menuposition, languageID, status }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'Menu Updated successfully..',
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

        const Data = await Menu.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Menu Not Found..'
            })
        }

        const Delete = await Menu.findByIdAndDelete(id);

        return res.status(400).send({
            success: false,
            message: 'Menu Deleted Successfully..'
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
    AddMenu, GetAllData, GetById, Update, Delete
})