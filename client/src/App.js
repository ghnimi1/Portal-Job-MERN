import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeRecruiter from "./pages/HomeRecruiter";
import ProfileCandidat from "./pages/ProfileCandidat";
import ProfileRecruiter from "./pages/ProfileRecruiter";
import EditJob from "./components/EditJob";
import CreateJob from "./pages/CreateJob";
import ListCv from "./pages/ListCv";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import ProtectedRouteCandidat from "./ProtectedRouteCandidat";

function App() {
  return (
    <div class="container-xxl bg-white p-0">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/homeRecruiter" element={<ProtectedRoute component={<HomeRecruiter />} />} />
        <Route exact path="/homeRecruiter/createJob" element={<ProtectedRoute component={<CreateJob />} />} />
        <Route exact path="/edit/:id" element={<ProtectedRoute component={< EditJob />} />} />
        <Route exact path="/listCv" element={<ProtectedRoute component={< ListCv />} />} />
        <Route exact path="/profileR" element={<ProtectedRoute component={<ProfileRecruiter />} />} />
        <Route exact path="/profileC" element={<ProtectedRouteCandidat component={<ProfileCandidat />} />} />
        <Route exact path="/jobDetail/:id" element={<JobDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
