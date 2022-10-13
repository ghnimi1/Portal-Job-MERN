import axios from '../../axios'
import {
    FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL,
} from '../actions/types'


export const fetchProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/users/profile`, config)
        dispatch({
            type: FETCH_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_PROFILE_FAIL,
            payload: message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.patch(`/users/updateProfile`, user, config)
        dispatch({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_USER_PROFILE_FAIL,
            payload: message,
        })
    }
}

