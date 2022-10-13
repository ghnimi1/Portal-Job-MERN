import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleJob } from '../redux/actions/jobActions';

function PostuItem({ pos, handleDelete }) {
    const { job } = useSelector(state => state.job)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleJob(pos?.jobId))
    }, [dispatch])
    return (
        <div className='col-sm-12 col-md-6'>
            <div className="job-item p-4 mb-4" key={pos._id}>
                <div className="row g-4">
                    <div className="col-sm-12 col-md-12 d-flex align-items-center justify-content-center">
                        <object data={pos?.cv} width="400" height="200" />

                    </div>
                    <div className="col-sm-12 col-md-12 d-flex flex-column  ">
                        <div className='row'>
                            <div className="col-sm-12 col-md-10 text-start ps-4">
                                <h5 className="mb-3">{pos?.fullName}</h5>
                                <span className="text-truncate me-0"><i className="fa fa-tasks text-primary me-2"></i>{job?.jobTitle}</span>
                                <br />
                                <span className="text-truncate me-3"><i className="fa fa-envelope text-primary me-2"></i>{pos?.email}</span>
                            </div>

                            <div className="col-sm-12 col-md-2  mb-3">
                                <a className="btn btn-light btn-square">
                                    <i className="fas fa-trash text-danger"
                                        onClick={() => handleDelete(pos?._id)}
                                    ></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostuItem;