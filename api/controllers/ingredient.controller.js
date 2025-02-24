const Ingredient = require('../models/ingredient.model')


function getAllIngredients(req, res) {
    Ingredient
        .find(req.query)
        .then((ingredients) => res.json(ingredients))
        .catch((err) => res.json(err))
}
function getIngredient(req, res) {
    Ingredient
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
}

function createIngredient(req, res) {
    Ingredient.create(req.body)
        .then((ingredient) => res.json(ingredient))
        .catch((err) => res.json(err))
}
function updateIngredient(req, res) {
    Ingredient.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
}
function deleteIngredient(req, res) {
    Ingredient.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

module.exports = {
    getAllIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
}