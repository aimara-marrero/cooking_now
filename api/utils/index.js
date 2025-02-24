const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model') //comprobar la direccion

// Authenticate Middleware User
function authUser (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      UserModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

// Authenticate Middleware Admin
function authAdmin (req, res, next) {
    if (res.locals.user.role !== 'administrador') { 
      res.status(403).json({ error: 'User not authorized'}) 
    } else {
      next()
    }
  }

module.exports = {
  authUser,
  authAdmin 
}