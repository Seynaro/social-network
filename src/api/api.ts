import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5066bc69-e929-457a-9ecc-2cace5a9ca22"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data
            )
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
};