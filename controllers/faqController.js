const { Faq } = require('../models/faqModel');
const { Language } = require('../models/languageModel');

// AddFaq
const AddFaq = async (req, res) => {
    try {
        const { questions, answer, position, languageID } = req.body;
        const createdBy = req.user.name;
        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const data = await Faq.create({ questions, answer, position, languageID, createdBy });

        return res.status(200).send({
            success: true,
            message: 'Faq Added Successfully..',
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

// GetAllData
const GetAllData = async (req, res) => {
    try {
        const data = await Faq.find({});
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Faq Data Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Faq Data viewed successfully..',
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
const GetById = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = await Faq.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Faq Data Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Faq Data Found Successfully..',
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
        const { questions, answer, position, languageID } = req.body;
        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const FindData = await Faq.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Faq Data Can Not Found..'
            })
        }

        const Update = await Faq.findByIdAndUpdate(id, { questions, answer, position, languageID }, { new: true })

        return res.status(200).send({
            success: true,
            message: 'FAQ Data Updated Successfully..',
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
        const FindData = await Faq.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Faq Data Not Found..'
            })
        }

        const Delete = await Faq.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Faq Data Deleted Successfully..'
        })

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddFaq, GetAllData, GetById, Update, Delete })