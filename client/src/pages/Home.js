/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import JobsList from '../components/JobsList';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from '../redux/actions/jobActions';
import Loader from '../components/Loader';
function Home(props) {
    const dispatch = useDispatch()
    const { searchJobs } = useSelector(state => state.searchJobs)
    const { jobs, loading } = useSelector(state => state.jobs)

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch, searchJobs])
    return (
        <div>
            <SearchBar />
            {loading ? <Loader /> : (<JobsList jobs={searchJobs ? searchJobs : jobs} />)}

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i class="bi bi-arrow-up"></i>
            </a>
        </div >
    );
}

export default Home;