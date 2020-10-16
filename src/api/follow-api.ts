import { instance } from "./base-config-api";

type IsFollowType = boolean

type CommonFollowType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const followAPI = {
    isFollow: (userId: number) => instance.get<IsFollowType>(`/follow/${userId}`),
    follow: (userId: number) => instance.post<CommonFollowType>(`/follow/${userId}`),
    unfollow: (userId: number) => instance.delete<CommonFollowType>(`/follow/${userId}`),
} 