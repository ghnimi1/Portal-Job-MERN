import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchSingleJob, updateJob } from '../redux/actions/jobActions';

function EditJob() {
    const { job } = useSelector(state => state.job)
    const { success } = useSelector(state => state.updateJob)
    const [info, setInfo] = useState({ jobType: job?.jobType });
    const [skillsL, setSkills] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleUpdate = (e) => {
        e.preventDefault()
        const skills = skillsL?.toString().split(",").map((skill) => skill);
        dispatch(updateJob(id, { ...info, skills }))
        if (success) { navigate('/homeRecruiter') }
    }
    useEffect(() => {
        dispatch(fetchSingleJob(id))
    }, [dispatch, id])
    return (
        <div className='container'>
            <div className="col-lg-12 mt-3">
                <h4 className="mb-3">Edit Job</h4>
                <form className="needs-validation" >
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label className="form-label">Job Title</label>
                            <input type="text" className="form-control" id="jobTitle"
                                placeholder="Job title"
                                defaultValue={job?.jobTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Job Type</label>
                            <select className="form-select" id='jobType'
                                defaultValue={job?.jobType}
                                onChange={handleChange}>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Intership">Intership</option>
                            </select>
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="companyName"
                                placeholder="Company name"
                                defaultValue={job?.companyName}
                                onChange={handleChange} />

                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Company URL</label>
                            <input type="text" className="form-control" id="companyURL"
                                placeholder="Company URL"
                                defaultValue={job?.companyURL}
                                onChange={handleChange} />
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Work Type</label>
                            <input type="text" className="form-control" id="workType"
                                placeholder="Work type"
                                defaultValue={job?.workType}
                                onChange={handleChange} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label">Salary</label>
                            <input type="text" className="form-control" id="payScale"
                                placeholder="Salary"
                                defaultValue={job?.payScale}
                                onChange={handleChange} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label">Skills</label>
                            <input type="text" className="form-control" value={skillsL}
                                placeholder="Skills"
                                onChange={(e) => setSkills(e.target.value)} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label">Job Description</label>
                            <div className="input-group has-validation">
                                <textarea type="text" className="form-control" id="jobDescription"
                                    placeholder="job description"
                                    defaultValue={job?.jobTitle}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-3"
                        onClick={handleUpdate}
                    >Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditJob