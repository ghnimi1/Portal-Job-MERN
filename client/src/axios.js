import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const instance = axios.create({
    baseURL: 'https://portajob.herokuapp.com/api'
})

axios.interceptors.request.use(config => {
    const { token } = useContext(AuthContext);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});

export default instance