const RecruiterModel = require("../models/recruiter.model")
const jwt = require('jsonwebtoken')

const authRecruiter = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(500).json('Authentication invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        req.recruiter = await RecruiterModel.findById(payload.id).select('-password')
        //req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {
        res.status(500).json('Authentication invalid')
    }
}

module.exports = authRecruiter