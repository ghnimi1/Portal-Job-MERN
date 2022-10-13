import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostu } from '../redux/actions/postuActions';
import PostuItem from './PostuItem';

function ListPostu({ postu }) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deletePostu(id))
        }
    }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="tab-content">
                        <div id="tab-1" className="row">
                            {
                                postu?.map(pos => (
                                    <PostuItem pos={pos} handleDelete={handleDelete} />
                                ))
                            }
                            <a className="btn btn-primary py-3 px-5" href="">Browse More CVs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListPostu;