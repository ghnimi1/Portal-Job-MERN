import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const ProtectedRouteCandidat = ({ component }) => {
    const { user } = useContext(AuthContext)
    const authenticated = localStorage.getItem('token')
    if (authenticated && user?.role === "Candidat") {
        return component;
    }
    return <Navigate to="/notFound" />
}

export default ProtectedRouteCandidat;