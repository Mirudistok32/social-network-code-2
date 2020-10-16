import { boolean } from "yup";
import { instance } from "./base-config-api";
import { PhotosType } from "./profile-api";

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    uniqueUrlName?: null | string // ??
}

type UsersResponseType = {
    totalCount: number
    error: string
    items: Array<UserType>
}

export const usersAPI = {
    getUsers: (count: number = 10, page: number = 1, term: string = '') =>
        instance.get<UsersResponseType>(`/users?count=${count}&page=${page}&term=${term}`),
    getFriend: (count: number = 10, page: number = 1, term: string = '', friend: boolean = true) =>
        instance.get<UsersResponseType>(`/users?count=${count}&page=${page}&term=${term}&friend=${friend}`),
}