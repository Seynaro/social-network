import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "5066bc69-e929-457a-9ecc-2cace5a9ca22"
	},
});

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10
}

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}