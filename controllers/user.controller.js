const recruiterModel = require('../models/recruiter.model')
const UserModel = require('../models/user.model')
const ValidateUser = require('../validator/user.validator')
const generateToken = require('../utils/jwt')

const register = async (req, res) => {
    const { username, password, email } = req.body
    const { errors, isValid } = ValidateUser(req.body)
    try {
        if (!isValid) {
            res.status(404).json({ msg: errors });
        } else {
            const user = await UserModel.findOne({ email })
            const recruiter = await recruiterModel.findOne({ email })
            if (user) res.status(400).json({ msg: 'Email already Exists' })
            if (recruiter) res.status(400).json({ msg: 'Email already Exists' })
            const newUser = await UserModel.create({
                username, password, email
            })
            if (newUser) {
                // status 201 means sth was CREATED
                res.status(201).json({
                    msg: "Register Successful",
                    _id: newUser._id,
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role
                })
            }
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User does not exist." })
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })
        if (user) return res.json({
            msg: "Login Successful",
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findOne({ user: req.user.id })
        if (!user) {
            res.status(404).json({ msg: "Error User" })
        }
        res.status(201).json(req.user)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const updateUserProfile = async (req, res) => {
    const { profile } = req.body;
    try {
        if (profile?.basicInfo?.phoneno?.length < 8) {
            res.status(400).json({ msg: "Phone must be at least 8 characters." })
        }
        const updatedProfile = await UserModel.findByIdAndUpdate(
            req.user.id,
            {
                $set: {
                    profile: {
                        ...profile,
                    },
                },
            },
            { new: true }
        );

        res.status(200).json({
            _id: updatedProfile._id,
            username: updatedProfile.username,
            email: updatedProfile.email,
            profile: updatedProfile.profile,
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

module.exports = {
    login,
    register,
    getUserProfile,
    updateUserProfile
}