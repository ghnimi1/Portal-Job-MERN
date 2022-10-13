const JobModel = require('../models/job.model');
const recruiterModel = require('../models/recruiter.model');

const getAllJobs = async (req, res) => {
    const { ...others } = req.query
    try {
        const jobs = await JobModel.find({ ...others });
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

const createJob = async (req, res) => {
    try {
        const {
            jobTitle,
            jobType,
            jobDescription,
            companyName,
            companyURL,
            workType,
            jobLocation,
            payScale,
            skills,
        } = req.body;

        let job = JobModel({
            recruiterId: req.recruiter._id,
            jobTitle,
            jobType,
            jobLocation,
            jobDescription,
            companyName,
            companyURL,
            workType,
            payScale,
            skills,
        });

        job = await job.save();
        await recruiterModel.findByIdAndUpdate(req.recruiter._id, {
            $push: { jobsPosted: job._id }
        }, { new: true })
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

const getJob = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id)
        res.status(201).json(job)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const updateJob = async (req, res) => {
    try {
        const updatedJob = await JobModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(201).json(updatedJob);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

const deleteJob = async (req, res) => {
    try {
        const job = await JobModel.findByIdAndRemove({ _id: req.params.id })
        await recruiterModel.findOneAndUpdate({ _id: job.recruiterId }, {
            $pull: { jobsPosted: req.params.id }
        })
        res.status(200).json({ msg: "Job has been deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const getMyJobOffer = async (req, res) => {
    try {
        const recruiter = await recruiterModel.findById(req.recruiter._id).select('-password')
        const jobs = await JobModel.find({ recruiterId: recruiter?._id })
        res.status(200).json(jobs)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
    getMyJobOffer
}