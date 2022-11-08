const router = require('express').Router()

const userRouter = require('./user.router')
const recipeRouter = require('./recipe.router')
const ingredientRouter = require('./ingredient.router')
const authRouter = require('./auth.router')
const { authUser } = require('../utils')



router.use('/users',userRouter)
router.use('/recipes',recipeRouter)
router.use('/ingredients', ingredientRouter)
router.use('/auth', authRouter)/

//Show the user profile through authUser
router.get('/profile', authUser, (req, res) => {
    res.json(res.locals.user)
  })

module.exports= router