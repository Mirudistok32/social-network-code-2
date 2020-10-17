import { ProfileType, PhotosType } from './../../api/profile-api';
import { ActionsProfileType } from './../actions/profile-actions';

type InitialStateType = typeof initialState
const initialState = {
    profile: {} as ProfileType,
    status: '' as string,
    photos: {} as PhotosType
}

export const profileReducer = (state = initialState, action: ActionsProfileType): InitialStateType => {
    switch (action.type) {
        case 'APP/PROFILE/SET_PROFILE': {
            return { ...state, ...action.payload }
        }
        case 'APP/PROFILE/SET_PROFILE_STATUS': {
            return { ...state, ...action.payload }
        }
        case 'APP/PROFILE/UPDATE_OWNER_PROFILE': {
            return { ...state, ...action.payload }
        }
        case 'APP/PROFILE/UPDATE_OWNER_STATUS': {
            return { ...state, ...action.payload }
        }
        case 'APP/PROFILE/UPDATE_OWNER_PHOTO': {
            return { ...state, ...action.payload }
        }
        default: { return state }
    }
}