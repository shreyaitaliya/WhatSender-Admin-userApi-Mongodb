const { Testimonial } = require('../models/testimonialModel');
const fs = require('fs');

// Add Testimonial
const AddTestimonial = async (req, res) => {
    try {
        const { name, position, review, comment } = req.body;
        const createdBy = req.user.name;

        const image = req.files.image ? req.files.image[0].path : null;
        const Data = await Testimonial.create({ name, position, review, comment, image, createdBy })

        return res.status(200).send({
            success: true,
            message: 'Testimonial Created Successfully..',
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

// GetByAllData
const GetByAllData = async (req, res) => {
    try {
        const Data = await Testimonial.find({});
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Testimonial Data Not Found..'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Testimonial Data Found Successfully..',
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
        const Data = await Testimonial.findById(id);
        if (!Data) {
            return res.status(400).send({
                success: false,
                message: 'Testimonial Can Not Found..'
            })
        }
        return res.status(200).send({
            success: false,
            message: 'Testimonial Found Successfully..',
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

//Update
const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, position, review, comment } = req.body;

        const FindData = await Testimonial.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Testimonial Not Found..'
            })
        }

        const image = req.files.image ? req.files.image[0].path : FindData.image;

        const update = await Testimonial.findByIdAndUpdate(id, { name, position, review, comment, image }, { new: true });

        return res.status(400).send({
            success: false,
            message: 'Testimonial Updated Successfully..',
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

        const FindData = await Testimonial.findById(id);
        if (!FindData) {
            return res.status(400).send({
                success: false,
                message: 'Testimonial Not Found..'
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

        const Delete = await Testimonial.findByIdAndDelete(id);

        return res.status(200).send({
            success: true,
            message: 'Testimonial Deleted Succesfully..'
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
    AddTestimonial, GetByAllData, GetByID, Update, Delete
})