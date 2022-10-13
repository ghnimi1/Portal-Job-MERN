const express = require('express')
const router = express.Router()
const recruiterController = require('../controllers/recruiter.controller')
const authRecruiter = require('../middleware/authRecruiter')

router.post('/loginRecruiter', recruiterController.loginRecruiter)
router.post('/registerRecruiter', recruiterController.registerRecruiter)
router.get('/profile', authRecruiter, recruiterController.getProfileRecruiter)
router.patch('/updateProfile', authRecruiter, recruiterController.updateProfileRecruiter)
/* router.get('/profileRecruiter/:id', recruiterController.getUserRecruiter)
router.patch('/updateprofileRecruiter/:id', recruiterController.updateUserRecruiter) */

module.exports = router