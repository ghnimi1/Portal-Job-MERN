const postuModel = require("../models/postu.model");

const getAllPostu = async (req, res) => {
    try {
        let postu = await postuModel.find({ recruiterId: req.recruiter._id });
        res.status(200).json(postu);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const getPostu = async (req, res) => {
    try {
        const postu = await postuModel.findById(req.params.id)
        res.status(201).json(postu)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const deletePostu = async (req, res) => {
    try {
        await postuModel.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ msg: "Offer has been deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    getAllPostu,
    getPostu,
    deletePostu
}