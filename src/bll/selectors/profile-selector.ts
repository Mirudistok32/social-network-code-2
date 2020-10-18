import { AppStateType } from './../store';


export const getProfileDataSelect = (state: AppStateType) => state.profileReducer.profile
export const getProfileStatusSelect = (state: AppStateType) => state.profileReducer.status
export const getProfilePhotosSelect = (state: AppStateType) => state.profileReducer.photos 
