import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    DELETE_POST = 'DELETE_POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'first post', likesNumber: 150},
        {id: 2, text: 'second post', likesNumber: 50},
        {id: 3, text: 'third post', likesNumber: 35},
        {id: 4, text: 'fourth post', likesNumber: 61}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: action.newPostMessage,
                likesNumber: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

// Dispatch
export const addPost = (newPostMessage) => ({type: ADD_POST, newPostMessage});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status})

// Thunk
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;