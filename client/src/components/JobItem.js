import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

function JobItem({ job, handleDelete }) {
    const { user } = useContext(AuthContext)
    return (
        <div className="job-item p-4 mb-4" key={job._id}>
            <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                    <div className="text-start ps-4">
                        <h5 className="mb-3">{job?.jobTitle}</h5>
                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job?.jobLocation}</span>
                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job?.jobType}</span>
                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job?.payScale} $ </span>
                        {job?.skills.map(skill => (
                            <div className="tag">{skill}</div>
                        ))}

                    </div>
                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div className="d-flex mb-3">
                        {user?.role === 'Recruiter' ? (
                            <>
                                <Link to={`/edit/${job?._id}`}
                                    className="btn btn-primary me-3">Update Now
                                </Link>
                                <a className="btn btn-light btn-square"
                                    onClick={() => handleDelete(job?._id)}
                                >
                                    <i className="fas fa-trash text-danger"></i></a>
                            </>
                        ) : (
                            <Link to={`/jobDetail/${job?._id}`} className="btn btn-primary me-3" href="">Apply Now</Link>
                        )}
                    </div>
                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                </div>
            </div>
        </div>
    );
}

export default JobItem;