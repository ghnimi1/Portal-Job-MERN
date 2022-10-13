import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addJob } from '../redux/actions/jobActions';

function CreateJob() {
    const [info, setInfo] = useState({ jobType: "Full Time" });
    const [skillsL, setSkills] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { success } = useSelector(state => state.createJob)
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = (e) => {
        e.preventDefault()
        const skills = skillsL?.toString().split(",").map((skill) => skill);
        dispatch(addJob({ ...info, skills }))
        navigate('/homeRecruiter')
    }
    return (
        <div className='container'>
            <div className="col-lg-12 mt-3">
                <h4 className="mb-3">Create Job</h4>
                <form className="needs-validation" >
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label className="form-label">Job Title</label>
                            <input type="text" className="form-control" id="jobTitle"
                                placeholder="Job title"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Job Location</label>
                            <input type="text" className="form-control" id="jobLocation"
                                placeholder="Job location"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Job Type</label>
                            <select className="form-select" id='jobType'
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
                                onChange={handleChange} />

                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Company URL</label>
                            <input type="text" className="form-control" id="companyURL"
                                placeholder="Company URL"
                                onChange={handleChange} />
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label">Work Type</label>
                            <input type="text" className="form-control" id="workType"
                                placeholder="Work type"
                                onChange={handleChange} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label">Salary</label>
                            <input type="text" className="form-control" id="payScale"
                                placeholder="Salary"
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
                                <textarea type="text" rows={3}
                                    className="form-control" id="jobDescription"
                                    placeholder="job description"
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-3"
                        onClick={handleClick}
                    >Update</button>
                </form>
            </div>
        </div>
    );
}

export default CreateJob