import {
    FETCH_RECRUITER_PROFILE_REQUEST, FETCH_RECRUITER_PROFILE_SUCCESS, FETCH_RECRUITER_PROFILE_FAIL,
    UPDATE_RECRUITER_PROFILE_REQUEST, UPDATE_RECRUITER_PROFILE_SUCCESS, UPDATE_RECRUITER_PROFILE_FAIL,
} from '../actions/types'


export const updateRecruiterProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_RECRUITER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_RECRUITER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                updateRecruiterProfile: action.payload,
            };
        case UPDATE_RECRUITER_PROFILE_FAIL:
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

export const fetchRecruiterProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_RECRUITER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_RECRUITER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                recruiterProfile: action.payload,
            };
        case FETCH_RECRUITER_PROFILE_FAIL:
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
