import {
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
} from './types'
import axios from '../../axios'


export const registerِCandidat = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const { data } = await axios.post(
            '/users/register',
            user
        )
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
        window.location.replace('/login')
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
export const registerِRecruiter = (user) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const { data } = await axios.post(
            '/recruiter/registerRecruiter',
            user
        )
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
        window.location.replace('/login')
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}