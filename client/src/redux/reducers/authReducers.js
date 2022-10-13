import {
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
} from '../actions/types'


export const userRegisterCandidatReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
                success: null
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfoCandidat: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
                success: null
            }
        default:
            return state
    }
}

export const userRegisterRecruiterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
                success: null
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfoRecruiter: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
                success: null
            }
        default:
            return state
    }
}