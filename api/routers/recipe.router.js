const router = require("express").Router();

const {
  getAllRecipes,
  getRecipe,
  getRecipeByIngredients,
  getRecipeByDiet,
  getRecipeByDish,
  createRecipe,
  addComments,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipe.controller");

/*const {
    authAdmin,
    authUser} = require ("../utils")*/

router.get("/", getAllRecipes);
router.get("/dish/:dish", getRecipeByDish);
router.get("/diet/:diet", getRecipeByDiet);
router.get("/ingredient", getRecipeByIngredients);
router.get("/:id", getRecipe);
router.post("/", createRecipe);
router.post("/:id/comments", addComments); // no funciona
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
