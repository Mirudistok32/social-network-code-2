import { instance } from "./base-config-api";

type CommonFollowResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const followAPI = {
    isFollow: (userId: number) => instance.get<boolean>(`/follow/${userId}`),
    follow: (userId: number) => instance.post<CommonFollowResponseType>(`/follow/${userId}`),
    unfollow: (userId: number) => instance.delete<CommonFollowResponseType>(`/follow/${userId}`),
} 