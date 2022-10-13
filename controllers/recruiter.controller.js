const RecruiterModel = require('../models/recruiter.model')
const userModel = require('../models/user.model')
const generateToken = require('../utils/jwt')
const validator = require('validator')

const registerRecruiter = async (req, res) => {
    const { username, password, email } = req.body
    try {
        if (!username || !email || !password)
            res.status(400).json({ msg: 'Require all inputs' })
        if (password?.length < 6) {
            res.status(400).json({ msg: "Password must be at least 6 characters." })
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({ msg: "Format Email required" });
        }
        const recruiterExists = await RecruiterModel.findOne({ email })
        const UserExists = await userModel.findOne({ email })
        if (recruiterExists) res.status(400).json({ msg: 'Email already Exists' })
        if (UserExists) res.status(400).json({ msg: 'Email already Exists' })
        const newRecruiter = await RecruiterModel.create({
            username, password, email
        })

        // status 201 means sth was CREATED
        res.status(201).json({
            msg: "Register Successful",
            _id: newRecruiter._id,
            username: newRecruiter.username,
            email: newRecruiter.email,
            role: newRecruiter.role
        })
    } catch (err) {
        res.status(500).json({ msg: err.message });
        console.log(err);
    }
}

const loginRecruiter = async (req, res) => {
    try {
        const { email, password } = req.body;
        const recruiter = await RecruiterModel.findOne({ email })
        if (!recruiter) return res.status(400).json({ msg: "Recuiter does not exist." })
        const isMatch = await recruiter.comparePassword(password)
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })
        if (recruiter) return res.json({
            msg: "Login Successful",
            _id: recruiter._id,
            username: recruiter.username,
            email: recruiter.email,
            role: recruiter.role,
            token: generateToken(recruiter._id)
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


const getProfileRecruiter = async (req, res) => {
    try {
        const recruiter = await RecruiterModel.findOne({ recruiter: req.recruiter.id }).select('-password')
        if (!recruiter) {
            res.status(400).json({ msg: "Error User" })
        }
        res.status(201).json(req.recruiter)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const updateProfileRecruiter = async (req, res) => {
    const { companyInfo } = req.body;
    try {
        if (companyInfo?.phoneCompany?.length < 8) {
            res.status(404).json({ msg: "Phone must be at least 8 characters." })
        }
        const updatedProfile = await RecruiterModel.findByIdAndUpdate(
            req.recruiter.id,
            {
                $set: {
                    companyInfo: {
                        ...companyInfo,
                    }
                },
            },
            { new: true }
        ).select('-password')

        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

module.exports = {
    loginRecruiter,
    registerRecruiter,
    getProfileRecruiter,
    updateProfileRecruiter,
}