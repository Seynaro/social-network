import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

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
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
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
        default:
            return state;
    }
};

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})
const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatusAC = (status) => ({type: SET_STATUS, status});

export const getUserProfileTC = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        });
};

export const getStatusTC = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        });
};

export const updateStatusTC = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
};


export default profileReducer;