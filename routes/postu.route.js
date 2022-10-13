const express = require('express');
const multer = require('multer')
const uuid = require('uuid').v4;
const path = require('path');
const PostuController = require('../controllers/postu.controller');
const authCandidat = require('../middleware/authCandidat');
const authRecruiter = require('../middleware/authRecruiter');
const jobModel = require('../models/job.model');
const postuModel = require('../models/postu.model');
const recruiterModel = require('../models/recruiter.model');
const cloudinary = require('../utils/cloudinary');
const router = express.Router();

const files = [];
const fileInArray = []

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        let filePath = [];
        console.log("MULTER ENTRY ", file.originalname)
        console.log("files", req.files)

        const ext = path.extname(file.originalname);
        const id = uuid();
        filePath = `${id}${ext}`;
        fileInArray?.push([(filePath)])
        console.log("IN ARRAY ", filePath)
        files.push(fileInArray)
        console.log("PUSHED MAIN ARRAY", fileInArray)
        cb(null, filePath)
        console.log("current length", files.length)
    }
})

const upload = multer({

    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg  and .pdf format allowed!'));
        }
    },
    storage: storage,
})

router.post('/:jobId', upload.array('cv'), authCandidat, async (req, res) => {
    try {

        console.log(req.files.length)
        console.log("Files", fileInArray)
        let img;

        let pdff;

        for (let i = 0; i < fileInArray.length; i++) {
            let fileext = fileInArray[i][0].split('.')[1];
            console.log(path.resolve(__dirname, "../uploads"))
            if (fileext == 'jpg' || fileext == 'png' || fileext == 'jpeg')
                img = await cloudinary.uploader.upload(`${path.resolve(__dirname, "../uploads")}/${fileInArray[i][0]}`);


            else if (fileext == "pdf")
                pdff = await cloudinary.uploader.upload(`${path.resolve(__dirname, "../uploads")}/${fileInArray[i][0]}`, { pages: true });
        }
        const job = await jobModel.findById(req.params.jobId)
        let postu = new postuModel({
            jobId: req.params.jobId,
            recruiterId: job.recruiterId,
            fullName: req.body.fullName,
            email: req.body.email,
            cv: pdff.secure_url,
            cloudinary_id_cv: pdff.public_id,
        });
        await postu.save();
        res.status(200).json(postu);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
});

router.get('/', authRecruiter, PostuController.getAllPostu);
router.get('/:id', PostuController.getPostu);
router.delete('/:id', authRecruiter, PostuController.deletePostu);

module.exports = router;