import {
    FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAIL,
    FETCH_SINGLE_JOB_REQUEST, FETCH_SINGLE_JOB_SUCCESS, FETCH_SINGLE_JOB_FAIL,
    FETCH_MY_JOB_OFFER_REQUEST, FETCH_MY_JOB_OFFER_SUCCESS, FETCH_MY_JOB_OFFER_FAIL,
    DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, DELETE_JOB_FAIL,
    UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS, UPDATE_JOB_FAIL,
    CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS, CREATE_JOB_FAIL,
    SEARCH_JOBS_REQUEST, SEARCH_JOBS_SUCCESS, SEARCH_JOBS_FAIL
} from '../actions/types'

export const createJobReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CREATE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                createJob: action.payload,
            };
        case CREATE_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchJobsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                jobs: action.payload,
            };
        case FETCH_JOBS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchSingleJobReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_JOB_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                job: action.payload,
            };
        case FETCH_SINGLE_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchMyJobOfferReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MY_JOB_OFFER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MY_JOB_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                myJobOffer: action.payload,
            };
        case FETCH_MY_JOB_OFFER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const deleteJobReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_REQUEST:
            return {
                loading: true
            }
        case DELETE_JOB_SUCCESS:
            return {
                loading: false,
                success: true,
                DeleteJob: action.payload
            }
        case DELETE_JOB_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const updateJobReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_JOB_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                updateJob: action.payload,
            };
        case UPDATE_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const searchJobsReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                searchJobs: action.payload,
            };
        case SEARCH_JOBS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}
