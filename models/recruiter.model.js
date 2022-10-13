const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RecruiterSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            default: "Recruiter",
        },
        companyInfo: {
            companyName: {
                type: String,
            },
            picture: {
                type: String
            },
            companyLocation: {
                type: String,
            },
            companyURL: {
                type: String,
            },
            phoneCompany: {
                type: Number,
            },
            companyDescription: {
                type: String,
            },
        },
        jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    },
    {
        timeStamps: true,
    }
);

RecruiterSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
RecruiterSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};
module.exports = mongoose.model("Recruiter", RecruiterSchema);