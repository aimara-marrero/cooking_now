const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['usuario', 'administrador'],
        required: true
    },
    diet: {
        type: String,
        enum: ['vegano', 'vegetariano', 'omnivoro'],
        default:'omnivoro'
    }

})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
