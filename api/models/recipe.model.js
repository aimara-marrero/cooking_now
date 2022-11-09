const mongoose = require("mongoose");
const commentSchema = require('./comment.model')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diet: {
        type: String,
        enum: ['vegano', 'vegetariano', 'omnivoro'],
        required: true
    },
    dishType: {
        type: String,
        enum: ['primer plato', 'segundo plato', 'aperitivo', 'postre', 'salsa'],
        required: true,
    },
    ingredients:[{
        quantity : String,
        ingredient : {
         type : mongoose.Schema.Types.ObjectId,
         ref:'ingredient',
         required: true
        }
     }],

    time: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['facil', 'medio', 'dificil']
    },
    preparation: {
        type: String,
        required: true
    },
    comments: [commentSchema]
})

const recipeModel = mongoose.model('recipe', recipeSchema);

module.exports = recipeModel;