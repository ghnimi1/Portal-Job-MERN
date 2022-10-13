import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "../axios"

function Login(props) {
    const [info, setInfo] = useState({});
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClickCandidat = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/users/login", info);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("token", JSON.stringify(res.data?.token));
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    const handleClickRecruiter = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/recruiter/loginRecruiter", info);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("token", JSON.stringify(res.data?.token));
            navigate("/homeRecruiter")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    return (
        <div className="container">
            <section className="vh-100 mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5 mb-5" >
                            <form>
                                <div className="d-flex  mb-3">
                                    <a className="btn btn-light"
                                        style={{ cursor: 'none' }}>Sign in Recruiter</a>
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
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-5">
                            <form>
                                <div className="d-flex mb-3">
                                    <a className="btn btn-light"
                                        style={{ cursor: 'none' }}>Sign in Candidat</a>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="email"
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
                                        onClick={handleClickCandidat}
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className="small fw-bold mt-2 pt-1 text-center mt-5">Don't have an account?
                        <Link to="/register"
                            className="link-danger">Register
                        </Link></p>
                </div>
            </section>
        </div>
    );
}

export default Login;