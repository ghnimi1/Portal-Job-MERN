import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerِCandidat, registerِRecruiter } from '../redux/actions/authActions';
import Alert from '../components/Alert';

function Register(props) {
    const [info, setInfo] = useState({});
    const dispatch = useDispatch()
    const { error: errorCandidat } = useSelector(state => state.userInfoCandidat)
    const { error: errorRecruiter } = useSelector(state => state.userInfoRecruiter)
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClickCandidat = (e) => {
        e.preventDefault();
        dispatch(registerِCandidat(info))
    };
    const handleClickRecruiter = (e) => {
        e.preventDefault();
        dispatch(registerِRecruiter(info))
    };
    return (
        <div className="container">
            <section className="vh-100 mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5 mb-5">
                            <div>
                                <div className="d-flex mb-3">
                                    <a className="btn btn-light" style={{ cursor: 'none' }} >Register Recruiter</a>
                                </div>
                                {errorRecruiter && <Alert error={errorRecruiter} />}
                                <div className="form-outline mb-4">
                                    <input type="text"
                                        id="username"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter a username" />


                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email"
                                        id="email"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password"
                                        id="password"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button"
                                        onClick={handleClickRecruiter}
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-5">
                            <div>
                                <div className="d-flex mb-3">
                                    <a className="btn btn-light"
                                        style={{ cursor: 'none' }}>Register Candidat</a>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text"
                                        id="username"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter a username" />
                                    {errorCandidat?.username && <Alert error={errorCandidat?.username} />}
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email"
                                        id="email"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    {errorCandidat?.email && <Alert error={errorCandidat?.email} />}
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password"
                                        id="password"
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    {errorCandidat?.password && <Alert error={errorCandidat?.password} />}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button"
                                        onClick={handleClickCandidat}
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="small fw-bold mt-2 pt-1 text-center mt-5">Already have an account?
                        <Link to="/login"
                            className="link-danger">Login
                        </Link></p>
                </div>
            </section>
        </div>
    );
}

export default Register;