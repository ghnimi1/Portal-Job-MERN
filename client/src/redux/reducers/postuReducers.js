import {
    CREATE_POSTU_REQUEST, CREATE_POSTU_SUCCESS, CREATE_POSTU_FAIL,
    FETCH_POSTU_REQUEST, FETCH_POSTU_SUCCESS, FETCH_POSTU_FAIL,
    DELETE_POSTU_REQUEST, DELETE_POSTU_SUCCESS, DELETE_POSTU_FAIL
} from '../actions/types'

export const createPostuReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POSTU_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CREATE_POSTU_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                createPostu: action.payload,
            };
        case CREATE_POSTU_FAIL:
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

export const fetchPostuReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTU_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_POSTU_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                postu: action.payload,
            };
        case FETCH_POSTU_FAIL:
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

export const deletePostuReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POSTU_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_POSTU_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                deletePostu: action.payload,
            };
        case DELETE_POSTU_FAIL:
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
