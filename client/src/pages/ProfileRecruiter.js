import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UpdateProfileRecruiter from '../components/UpdateProfileRecruiter';
import { fetchRecruiterProfile } from '../redux/actions/recruiterActions';

function ProfileRecruiter(props) {
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const { recruiterProfile } = useSelector(state => state.recruiterProfile)

    const handleEditing = () => {
        setEditing(true)
    }

    useEffect(() => {
        dispatch(fetchRecruiterProfile())
    }, [dispatch])

    return (
        <div classNameName='container'>
            <section >
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Recruiter Profile</li>
                                </ol>
                            </nav>
                            <button className='btn btn-secondary mb-3'
                                onClick={handleEditing}
                            >
                                Update Profile
                            </button>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src=
                                        {
                                            recruiterProfile?.companyInfo?.picture
                                                ? recruiterProfile?.companyInfo?.picture
                                                : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        }
                                        alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">{recruiterProfile?.companyInfo?.companyName}</h5>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">ghnimihassenportfolio.herokuapp.com</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                            <p className="mb-0">ghnimi1</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                                            <p className="mb-0">@ghnimiHassen</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                                            <p className="mb-0">ghnimihassen2</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                            <p className="mb-0">ghnimihassen2</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {editing ? (<UpdateProfileRecruiter setEditing={setEditing} />) : (
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{recruiterProfile?.username}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{recruiterProfile?.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(+216) {recruiterProfile?.companyInfo?.phoneCompany}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{recruiterProfile?.companyInfo?.companyLocation}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">URL</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{recruiterProfile?.companyInfo?.companyURL}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">Description</span>
                                                </p>
                                                <p>{recruiterProfile?.companyInfo?.companyDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfileRecruiter;