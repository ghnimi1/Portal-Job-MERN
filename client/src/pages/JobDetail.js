import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleJob } from '../redux/actions/jobActions';
import { AddPostu } from '../redux/actions/postuActions';
import { AuthContext } from '../context/AuthContext';
import moment from "moment"
import Alert from '../components/Alert';

function JobDetail(props) {
    const { user } = useContext(AuthContext)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [cv, setCv] = useState([])
    const [error, setError] = useState("")
    const { id } = useParams()
    const dispatch = useDispatch()
    const { job } = useSelector(state => state.job)
    useEffect(() => {
        if (id) {
            dispatch(fetchSingleJob(id))
        }
    }, [dispatch, id])

    const handleClick = (e) => {
        e.preventDefault()
        if (user) {
            const formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("email", email);
            for (var x = 0; x < cv.length; x++) {
                formData.append("cv", cv[x]);
            }
            dispatch(AddPostu(id, formData))
            setFullName('')
            setEmail('')
            setCv([])
        } else {
            setError("Please Login!!")
        }
    }

    return (
        <div>
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-5">
                                <img className="flex-shrink-0 img-fluid border rounded" src="https://res.cloudinary.com/dnw7or6mq/image/upload/v1665665556/com-logo-1_gqn0ff.jpg" alt="" style={{ width: "80px", height: "80px" }} />
                                <div className="text-start ps-4">
                                    <h3 className="mb-3">{job?.jobTitle}</h3>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job?.jobLocation}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job?.jobType}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job?.payScale} $</span>
                                </div>
                            </div>

                            <div className="mb-5">
                                <h4 className="mb-3">Job description</h4>
                                <p>{job?.jobDescription}</p>
                            </div>

                            <div className="">
                                <h4 className="mb-4">Apply For The Job</h4>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control"
                                                placeholder="Your FullName" value={fullName}
                                                onChange={(e) => setFullName(e.target.value)} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control"
                                                placeholder="Your Email" value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-12 d-flex" >
                                            <input type="file" multiple
                                                className="form-control bg-white"
                                                onChange={(e) => setCv(e.target.files)}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100"
                                                onClick={handleClick}>Apply Now</button>
                                        </div>
                                        {error && <Alert error={error} />}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Job Summery</h4>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: {moment(job?.createdAt).format('DD/MM/YYYY HH:mm')}</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Vacancy: 2 Position</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: {job?.jobType}</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: {job?.payScale} $</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Location: {job?.jobLocation}</p>
                                <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2045</p>
                            </div>
                            <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                <h6 className="m-0">{job?.companyName}</h6>
                                <p className="m-0">{job?.companyURL}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default JobDetail;