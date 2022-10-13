import axios from '../../axios'
import {
    CREATE_POSTU_REQUEST, CREATE_POSTU_SUCCESS, CREATE_POSTU_FAIL,
    FETCH_POSTU_REQUEST, FETCH_POSTU_SUCCESS, FETCH_POSTU_FAIL,
    DELETE_POSTU_REQUEST, DELETE_POSTU_SUCCESS, DELETE_POSTU_FAIL
} from '../actions/types'

export const AddPostu = (id, postu) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_POSTU_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        }

        const { data } = await axios.post(`/postu/${id}`, postu, config)
        dispatch({
            type: CREATE_POSTU_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: CREATE_POSTU_FAIL,
            payload: message,
        })
    }
}

export const fetchAllPostu = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_POSTU_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        }

        const { data } = await axios.get(`/postu`, config)
        dispatch({
            type: FETCH_POSTU_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_POSTU_FAIL,
            payload: message,
        })
    }
}

export const deletePostu = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_POSTU_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/postu/${id}`, config)
        dispatch({
            type: DELETE_POSTU_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_POSTU_FAIL,
            payload: message,
        })
    }
}