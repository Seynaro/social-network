import {profileAPI} from "../api/profile-api";
import {stopSubmit} from "redux-form";
import {ProfileType, PostType, PhotosType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "It's my first post", likesCount: 11},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ''
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType}
            }
        default:
            return state;
    }
};

type AddPostACType = {
    type: typeof ADD_POST
    newPostText: string
}
type DeletePostACType = {
    type: typeof DELETE_POST
    postId: number
}
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusACType = {
    type: typeof SET_STATUS
    status: string
}
type SavePhotoSuccessACType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const addPostAC = (newPostText: string): AddPostACType => ({type: ADD_POST, newPostText});
export const deletePostAC = (postId: number): DeletePostACType => ({type: DELETE_POST, postId})
const setUserProfileAC = (profile: ProfileType): SetUserProfileACType => ({type: SET_USER_PROFILE, profile});
const setStatusAC = (status: string): SetStatusACType => ({type: SET_STATUS, status});
const savePhotoSuccessAC = (photos: PhotosType): SavePhotoSuccessACType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfileTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(data));
};

export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(data));
};

export const updateStatusTC = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
};

export const savePhotoTC = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(data.data.photos));
    }
};

export const saveProfileTC = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfileTC(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
    return Promise.reject(data.messages[0])
    }
};


export default profileReducer;