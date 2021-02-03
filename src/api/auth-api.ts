import {instance, ResultCodeForCaptcha, ResultCodesEnum} from "./api";

type ResponseType<D = {}, RC = ResultCodesEnum> = {
	data: D
	resultCode: RC
	messages: Array<string>
}

type MeResponseDataType = {
		id: number
		email: string
		login: string
}

type LoginResponseDataType = {
		userId: number
}

export const authAPI = {
	me() {
		return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
			.then(res => res.data)
	},
	logout() {
		return instance.delete(`auth/login`)
	}
};