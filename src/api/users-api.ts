import {GetItemsType, instance} from "./api";



export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
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