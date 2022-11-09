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
        required: true,
        default: 'usuario'
    },
    diet: {
        type: String,
        enum: ['vegano', 'vegetariano', 'omnivoro'],
        default:'omnivoro'
    },
    favoriteRecipes: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'recipe'
       }]

})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
