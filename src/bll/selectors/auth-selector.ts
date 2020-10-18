import { AppStateType } from './../store';


export const getAuthIsAutorizationSelect = (state: AppStateType) => state.authReducer.isAutorization
export const getAuthDataSelect = (state: AppStateType) => state.authReducer.data 
