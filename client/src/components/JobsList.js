import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../redux/actions/jobActions';
import JobItem from './JobItem';
function JobsList({ jobs }) {
    const dispatch = useDispatch()

    const handleDeleteJob = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteJob(id))
        }
    }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                {jobs?.length !== 0 ? (
                    <>
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade p-0 active show">
                                    {
                                        jobs?.map(job => (
                                            <JobItem job={job} handleDelete={handleDeleteJob} />
                                        ))
                                    }
                                    <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                                </div>
                            </div>
                        </div>
                    </>) : <h4 className='text-center'>Sorry, we currently have no jobs for this search. try another</h4>}
            </div>
        </div>



    );
}

export default JobsList;