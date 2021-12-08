import {auth} from "./auth-reducer";

let initialState = {
    initialized: false
}

const INITIALIZING_SUCCESSED = 'INITIALIZING_SUCCESSED';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESSED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// Dispatch
export const initializingSuccessed = () => ({type: INITIALIZING_SUCCESSED});

// Thunks
export const initializeApp = () => async (dispatch) => {
    await dispatch(auth());

    dispatch(initializingSuccessed())
}

export default appReducer;