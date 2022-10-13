import {
    FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL,
} from '../actions/types'


export const updateUserProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                updateUserProfile: action.payload,
            };
        case UPDATE_USER_PROFILE_FAIL:
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

export const fetchProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userProfile: action.payload,
            };
        case FETCH_PROFILE_FAIL:
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
