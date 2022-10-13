const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        jobId: { type: mongoose.Types.ObjectId, ref: 'Job' },
        recruiterId: { type: String },
        fullName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        cv: {
            type: String,
            require: true
        },
        cloudinary_id_cv: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('postul', PostSchema);