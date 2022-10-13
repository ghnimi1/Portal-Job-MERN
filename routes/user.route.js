const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authCandidat = require('../middleware/authCandidat')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/profile', authCandidat, userController.getUserProfile)
router.patch('/updateProfile', authCandidat, userController.updateUserProfile)

module.exports = router