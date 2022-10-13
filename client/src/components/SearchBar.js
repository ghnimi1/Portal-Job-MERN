import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchJob } from '../redux/actions/jobActions';

function SearchBar(props) {
    const dispatch = useDispatch()
    const [jobTitle, setJobTitle] = useState('')
    const [jobLocation, setJobLocation] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchJob(jobTitle.replace(/^./, jobTitle[0].toUpperCase()), jobLocation.replace(/^./, jobLocation[0].toUpperCase())))
    }

    return (
        <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-6">
                                <input type="text" className="form-control border-0"
                                    placeholder="Job Title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                            </div>

                            <div className="col-md-6">
                                <input type="text" className="form-control border-0"
                                    placeholder="Location"
                                    value={jobLocation}
                                    onChange={(e) => setJobLocation(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100"
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;