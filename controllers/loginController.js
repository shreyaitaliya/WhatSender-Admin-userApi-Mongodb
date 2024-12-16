const { Admin } = require('../models/adminModel');
const jwt = require('jsonwebtoken');

// login SuperAdmin
const Login = async (req, res) => {
    try {
        let user = await Admin.findOne({ email: req.body.email });
        if (!user || user.password !== req.body.password) {
            return res.status(400).send({
                success: false,
                message: "Email and password are not same"
            });
        }

        let token = await jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "12345678952368445842h" });

        return res.status(200).send({
            success: true,
            message: "Token is here",
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { Login };