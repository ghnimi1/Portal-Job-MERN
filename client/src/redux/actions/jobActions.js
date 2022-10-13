import axios from '../../axios'
import {
    FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAIL,
    FETCH_SINGLE_JOB_REQUEST, FETCH_SINGLE_JOB_SUCCESS, FETCH_SINGLE_JOB_FAIL,
    FETCH_MY_JOB_OFFER_REQUEST, FETCH_MY_JOB_OFFER_SUCCESS, FETCH_MY_JOB_OFFER_FAIL,
    DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, DELETE_JOB_FAIL,
    UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS, UPDATE_JOB_FAIL,
    CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS, CREATE_JOB_FAIL,
    SEARCH_JOBS_REQUEST, SEARCH_JOBS_SUCCESS, SEARCH_JOBS_FAIL
} from '../actions/types'

export const addJob = (job) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_JOB_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.post(`/jobs`, job, config)
        dispatch({
            type: CREATE_JOB_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: CREATE_JOB_FAIL,
            payload: message,
        })
    }
}

export const fetchJobs = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_JOBS_REQUEST,
        })
        const { data } = await axios.get(`/jobs`)
        dispatch({
            type: FETCH_JOBS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_JOBS_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleJob = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_JOB_REQUEST,
        })
        const { data } = await axios.get(`/jobs/${id}`)
        dispatch({
            type: FETCH_SINGLE_JOB_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_JOB_FAIL,
            payload: message,
        })
    }
}

export const fetchMyJobOffer = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_MY_JOB_OFFER_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/jobs/myJobOffer`, config)
        dispatch({
            type: FETCH_MY_JOB_OFFER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_MY_JOB_OFFER_FAIL,
            payload: message,
        })
    }
}

export const deleteJob = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_JOB_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/jobs/${id}`, config)
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: message,
        })
    }
}

export const updateJob = (id, job) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_JOB_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.patch(`/jobs/${id}`, job, config)
        dispatch({
            type: UPDATE_JOB_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_JOB_FAIL,
            payload: message,
        })
    }
}

export const searchJob = (jobTitle, jobLocation) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SEARCH_JOBS_REQUEST,
        })
        const { data } = await axios.get(
            jobLocation || jobTitle ?
                `/jobs?jobTitle=${jobTitle}&jobLocation=${jobLocation}` : '/jobs',
            { jobTitle, jobLocation })
        dispatch({
            type: SEARCH_JOBS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: SEARCH_JOBS_FAIL,
            payload: message,
        })
    }
}