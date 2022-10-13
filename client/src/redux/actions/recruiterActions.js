import axios from '../../axios'
import {
    FETCH_RECRUITER_PROFILE_REQUEST, FETCH_RECRUITER_PROFILE_SUCCESS, FETCH_RECRUITER_PROFILE_FAIL,
    UPDATE_RECRUITER_PROFILE_REQUEST, UPDATE_RECRUITER_PROFILE_SUCCESS, UPDATE_RECRUITER_PROFILE_FAIL,
} from '../actions/types'


export const fetchRecruiterProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_RECRUITER_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/recruiter/profile`, config)
        dispatch({
            type: FETCH_RECRUITER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_RECRUITER_PROFILE_FAIL,
            payload: message,
        })
    }
}

export const updateRecruiterProfile = (recruiter) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_RECRUITER_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.patch(`/recruiter/updateProfile`, recruiter, config)
        dispatch({
            type: UPDATE_RECRUITER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_RECRUITER_PROFILE_FAIL,
            payload: message,
        })
    }
}
