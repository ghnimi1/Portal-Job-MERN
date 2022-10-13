import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobsList from '../components/JobsList';
import Loader from '../components/Loader';
import { fetchMyJobOffer } from '../redux/actions/jobActions';

function HomeRecruiter(props) {
    const dispatch = useDispatch()
    const { myJobOffer, loading } = useSelector(state => state.myJobOffer)
    const { success } = useSelector(state => state.deleteJob)

    useEffect(() => {
        dispatch(fetchMyJobOffer())
    }, [dispatch, success])
    return (
        <div className='container'>
            {loading ? <Loader /> : <JobsList jobs={myJobOffer} />}

        </div>
    );
}

export default HomeRecruiter;