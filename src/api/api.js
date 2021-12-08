import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '018cc731-9a4a-448c-bbca-0588e2186565'
    }
});

export const usersAPI = {
    getUsersFromAPI(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        )
    },
    unFollow(id) {
        return (
            instance.delete(`follow/${id}`).then(response => response.data)
        )
    },
    follow(id) {
        return (
            instance.post(`follow/${id}`).then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => response.data)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`).then(response => response.data)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status: status}).then(response => response.data)
        )
    }
}

export const authAPI = {
    auth() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    },

    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
        )
    },

    logout() {
        return (
            instance.delete(`auth/login`).then(response => response.data)
        )
    }
}