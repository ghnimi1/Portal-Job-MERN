import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function Navbar(props) {
    const { user, token, dispatch } = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <div className='container'>
                <Link to={user?.role === "Recruiter" ? "/homeRecruiter" : "/"} className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-primary">Job Portal</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        {user?.role === "Recruiter" && (<>
                            <Link to='/listCv' className="nav-item nav-link">List Of Cv</Link>
                            <Link to='/homeRecruiter/createJob' className="nav-item nav-link">Create Job</Link>
                        </>)}

                        <a className="nav-item nav-link">{user?.username}</a>
                    </div>

                    {!user && (<Link to='/login' style={{ boxShadow: 'none' }}
                        className="btn btn-primary rounded-0 py-4 px-lg-5  d-lg-block">
                        Login / Register
                    </Link>)}
                    {user && token && (
                        <div className="nav-item dropdown" >
                            <span className="nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://res.cloudinary.com/dnw7or6mq/image/upload/v1663520883/uv2gbs0vcrecy7udw10n.png"
                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                    alt="avatar" />
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{}}>
                                <Link className="dropdown-item" to={user?.role === 'Candidat' ? `/profileC` : 'profileR'}>Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item"
                                    onClick={() => {
                                        localStorage.removeItem("user");
                                        localStorage.removeItem("token");
                                        window.location.replace('/login')
                                    }}>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </nav>

    );
}

export default Navbar;