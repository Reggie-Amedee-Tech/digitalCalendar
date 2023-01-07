const mongoose = require('mongoose');

const userModelSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId
    }
}, {timestamps: true})

const userModel = mongoose.model("UserModel", userModelSchema)

module.exports = userModel;
