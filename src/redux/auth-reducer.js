import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

// Dispatch
export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

// Thunk
export const auth = () => async (dispatch) => {
    let data = await authAPI.auth();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(auth());
    } else {
        alert(data.messages)
    }
}

export const logoutThunk = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    } else {
        alert(data.messages)
    }
}

export default authReducer;