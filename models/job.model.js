const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
    {
        recruiterId: { type: mongoose.Types.ObjectId, ref: 'Recruiter' },
        jobTitle: {
            type: String,
            require: true,
        },
        jobType: {
            type: String,
            require: true,
        },
        jobDescription: {
            type: String,
            require: true,
        },
        jobLocation: {
            type: String,
            require: true,
        },
        companyName: {
            type: String,
            require: true,
        },
        companyURL: {
            type: String,
            require: true,
        },
        workType: {
            type: String,
            require: true,
        },
        payScale: {
            type: String,
            require: true,
        },
        skills: [{
            type: String,
            require: true
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Job', jobSchema);