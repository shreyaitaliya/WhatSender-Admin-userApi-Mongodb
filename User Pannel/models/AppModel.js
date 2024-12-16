const mongoose = require('mongoose');

const AppSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    appname: {
        type: String,
        required: true, 
    },
    weblink: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const App = mongoose.model('App', AppSchema);
module.exports = { App };