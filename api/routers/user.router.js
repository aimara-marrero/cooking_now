const router = require('express').Router()

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')


const {
    authAdmin,
    authUser
} = require ('../utils')

router.get('/',authUser,getAllUsers)
router.get('/:id',authUser,getUser)
router.post('/',authUser,createUser)
router.put('/:id',authUser, authAdmin,updateUser)
router.delete('/:id',authUser, authAdmin,deleteUser)
module.exports = router