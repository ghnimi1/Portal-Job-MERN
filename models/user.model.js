const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "Candidat",
    },
    profile: {
        name: {
            type: String,
            require: false,
        },
        title: {
            type: String,
            require: false,
        },
        description: {
            type: String,
            require: false,
        },
        photo: {
            type: String,
        },
        skills: [
            {
                type: String,
            },
        ],
        basicInfo: {
            phoneno: {
                type: Number,
                require: false,
            },
            experiance: {
                type: String,
                require: false,
            },
            location: {
                type: String,
                require: false,
            },
            email: {
                type: String,
                require: false,
            },
        },
        education: {
            university: {
                type: String,
                require: false,
            },
            edescription: {
                type: String,
                require: false,
            },
        },
        projects: {
            projectname: {
                type: String,
                require: false,
            },
            pdescription: {
                type: String,
                require: false,
            },
        },
        certification: {
            certiname: {
                type: String,
                require: false,
            },
            cdescription: {
                type: String,
                require: false,
            },
        },
    }
},
    {
        timestamps: true,
    }
);

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};
module.exports = mongoose.model("User", UserSchema);