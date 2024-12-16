const { Admin } = require('../models/adminModel');

//Add User
const AddUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const Data = await Admin.create({ name, email, password, role: 'user' })
        return res.status(400).send({
            success: true,
            message: 'User Added Successfully...', Data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = ({ AddUser })