import { instance } from "./base-config-api";

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type CommonProfileResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}


export const profileAPI = {
    getProfile: (userId: number) => instance.get<ProfileType>(`/profile/${userId}`),
    getProfileStatus: (userId: number) => instance.get<string>(`/profile/status/${userId}`),
    changeOwnerStatus: (status: string) => instance.put<CommonProfileResponseType>(`/profile/status`, { status }),
    changeOwnerPhoto: (photo: FormData) => instance.put<CommonProfileResponseType<PhotosType>>(`/profile/photo`, photo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),
    changeOwnerProfile: (profile: ProfileType) => instance.put<CommonProfileResponseType>(`/profile`, profile)
}