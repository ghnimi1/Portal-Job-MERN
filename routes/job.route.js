const express = require('express');
const JobController = require('../controllers/job.controller');
const authRecruiter = require('../middleware/authRecruiter');

const router = express.Router();

router.get('/', JobController.getAllJobs);
router.post('/', authRecruiter, JobController.createJob);
router.get('/myJobOffer', authRecruiter, JobController.getMyJobOffer);
router.get('/:id', JobController.getJob);
router.patch('/:id', authRecruiter, JobController.updateJob);
router.delete('/:id', authRecruiter, JobController.deleteJob);

module.exports = router;