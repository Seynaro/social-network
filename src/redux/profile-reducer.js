import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    profile: null,
    status: "",
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}}
            };
        default:
            return state;
    }
};

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})
const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatusAC = (status) => ({type: SET_STATUS, status});
const savePhotoSuccessAC = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfileTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setUserProfileAC(response.data));
};

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatusAC(response.data));
};

export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
};

export const savePhotoTC = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos));
    }
};

export const saveProfileTC = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
    }
};


export default profileReducer;