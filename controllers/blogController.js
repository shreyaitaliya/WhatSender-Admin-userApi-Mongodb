const { Blog } = require('../models/blogModel');
const { Language } = require('../models/languageModel');
const { Tag } = require('../models/tagModel');
const { Category } = require('../models/categoryModel');
const fs = require('fs');

// AddBlog
const AddBlog = async (req, res) => {
    try {
        const { title, shortdesc, maindesc, categoryID, tagID, languageID, metatitle, metadesc, metatag } = req.body;
        const createdBy = req.user.name;
        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const FindTag = await Tag.findOne({ _id: tagID });
        if (!FindTag) {
            return res.status(400).send({
                success: false,
                message: 'Tag Can Not Be Found..'
            });
        }

        const FindCategory = await Category.findOne({ _id: categoryID });
        if (!FindCategory) {
            return res.status(400).send({
                success: false,
                message: 'Category Can Not Be Found..'
            });
        }

        // Handle uploaded files
        const image = req.files.image ? req.files.image[0].path : null;
        const metaimage = req.files.metaimage ? req.files.metaimage[0].path : null;

        const data = await Blog.create({ title, image, shortdesc, maindesc, categoryID, tagID, languageID, metatitle, metaimage, metadesc, metatag, createdBy });

        return res.status(201).json({
            success: true,
            message: 'Blog added successfully',
            data
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// ViewData
const GetAllData = async (req, res) => {
    try {
        const data = await Blog.find({});
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Blog Data Can Not Found...'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Blog Data Found Successfully..',
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
        const data = await Blog.findById(id);
        if (!data) {
            return res.status(400).send({
                success: false,
                message: 'Blog Data Can Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Blog Data Found Successfully..',
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
        const { title, shortdesc, maindesc, categoryID, tagID, languageID, metatitle, metadesc, metatag } = req.body;

        const FindLanguage = await Language.findOne({ _id: languageID });
        if (!FindLanguage) {
            return res.status(400).send({
                success: false,
                message: 'Language Can Not Be Found..'
            });
        }

        const FindTag = await Tag.findOne({ _id: tagID });
        if (!FindTag) {
            return res.status(400).send({
                success: false,
                message: 'Tag Can Not Be Found..'
            });
        }

        const FindCategory = await Category.findOne({ _id: categoryID });
        if (!FindCategory) {
            return res.status(400).send({
                success: false,
                message: 'Category Can Not Be Found..'
            });
        }

        // Check if the blog exists
        const FindBlog = await Blog.findById(id);
        if (!FindBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        // Handle uploaded files
        const image = req.files.image ? req.files.image[0].path : FindBlog.image;
        const metaimage = req.files.metaimage ? req.files.metaimage[0].path : FindBlog.metaimage;

        // Update the blog
        const update = await Blog.findByIdAndUpdate(id, { title, image, shortdesc, maindesc, categoryID, tagID, languageID, metatitle, metaimage, metadesc, metatag }, { new: true });

        return res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            update
        });
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
        const FindData = await Blog.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Blog Data Can Not Found..'
            })
        }

        if (FindData.image) {
            fs.unlink(FindData.image, (err) => {
                if (err) {
                    console.log('Error removing image:', err.message);
                } else {
                    console.log('Image file deleted successfully');
                }
            });
        }

        const Delete = await Blog.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Blog Data Deleted Sucessfully..'
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
    AddBlog, GetAllData, GetByID, Update, Delete
})