import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UpdateProfileCandidat from '../components/UpdateProfileCandidat';
import { fetchProfile } from '../redux/actions/userActions';

function ProfileCandidat(props) {
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
    const { userProfile } = useSelector(state => state.userProfile)

    const handleEditing = () => {
        setEditing(true)
    }
    useEffect(() => {
        dispatch(fetchProfile())
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
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
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
                                            userProfile?.profile?.photo
                                                ? userProfile?.profile?.photo
                                                : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        }

                                        alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">{userProfile?.username}</h5>
                                    <p className="text-muted mb-1">{userProfile?.profile?.title}</p>
                                    <p className="text-muted mb-4">{userProfile?.profile?.basicInfo?.location}</p>

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
                        {editing ? (<UpdateProfileCandidat setEditing={setEditing} />) : (
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.profile?.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(+216) {userProfile?.profile?.basicInfo?.phoneno}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.profile?.basicInfo?.location}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Skills</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.profile?.skills?.map(skill => <span className='tag'> {skill} </span>)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">Education</span>
                                                </p>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <p className="mb-0">University</p>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <p className="text-muted mb-0"> {userProfile?.profile?.education?.university}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <p className="mb-0">Description</p>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <p className="text-muted mb-0">{userProfile?.profile?.education?.edescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">Projects</span>
                                                </p>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <p className="mb-0">Name</p>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <p className="text-muted mb-0">{userProfile?.profile?.projects?.projectname}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <p className="mb-0">Description</p>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <p className="text-muted mb-0">{userProfile?.profile?.projects?.pdescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <p className="mb-4">
                                                <span className="text-primary font-italic me-1">Certification</span>
                                            </p>
                                            <div className="col-sm-3">
                                                <p className="mb-0">Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.profile?.certification?.certiname}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Description</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userProfile?.profile?.certification?.cdescription}</p>
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

export default ProfileCandidat;