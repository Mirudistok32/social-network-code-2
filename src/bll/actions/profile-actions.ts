import { ResulteCodesEnum } from './../../api/base-config-api';
import { PhotosType, profileAPI, ProfileType } from './../../api/profile-api';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { InferActionsTypes, AppStateType } from './../store';


const actions = {
    setProfile: (profile: ProfileType) => ({ type: "APP/PROFILE/SET_PROFILE", payload: { profile } } as const),
    setProfileStatus: (status: string) => ({ type: "APP/PROFILE/SET_PROFILE_STATUS", payload: { status } } as const),
    updateOwnerStatus: (status: string) => ({ type: "APP/PROFILE/UPDATE_OWNER_STATUS", payload: { status } } as const),
    updateOwnerPhoto: (photo: PhotosType) => ({ type: "APP/PROFILE/UPDATE_OWNER_PHOTO", payload: { photo } } as const),
    updateOwnerProfile: (profile: ProfileType) => ({ type: "APP/PROFILE/UPDATE_OWNER_PROFILE", payload: { profile } } as const),
}
export type ActionsProfileType = InferActionsTypes<typeof actions>
export const actionsProfile = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsProfileType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsProfileType>

export const getProfileThunk = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await profileAPI.getProfile(userId)
            dispatch(actions.setProfile(response.data))
        } catch (error) {
            console.log("getProfileThunk " + error)
        }
    }
}
export const getProfileStatusThunk = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await profileAPI.getProfileStatus(userId)
            dispatch(actions.setProfileStatus(response.data))
        } catch (error) {
            console.log("getProfileStatusThunk " + error)
        }
    }
}
export const updateOwnerStatusThunk = (status: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await profileAPI.changeOwnerStatus(status)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.updateOwnerStatus(status))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error("Update status did not happen")
            }
        } catch (error) {
            console.log("updateOwnerStatusThunk " + error)
        }
    }
}
export const updateOwnerPhotoThunk = (photo: File): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const formData = new FormData()
            formData.append("image", photo)

            const response = await profileAPI.changeOwnerPhoto(formData)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.updateOwnerPhoto(response.data.data))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error("Update photo did not happen")
            }
        } catch (error) {
            console.log("updateOwnerPhotoThunk " + error)
        }
    }
}
export const updateOwnerProfileThunk = (profile: ProfileType): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await profileAPI.changeOwnerProfile(profile)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.updateOwnerProfile(profile))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error("Update profile did not happen")
            }

        } catch (error) {
            console.log("updateOwnerProfileThunk " + error)
        }
    }
}