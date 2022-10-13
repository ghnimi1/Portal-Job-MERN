import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListPostu from '../components/ListPostu';
import { fetchAllPostu } from '../redux/actions/postuActions';

function ListCv(props) {
    const dispatch = useDispatch()
    const { postu } = useSelector(state => state.postu)
    const { success } = useSelector(state => state.deletePostu)

    useEffect(() => {
        dispatch(fetchAllPostu())
    }, [dispatch, success])
    return (
        <div className='container'>
            <ListPostu postu={postu} />
        </div>
    );
}

export default ListCv;