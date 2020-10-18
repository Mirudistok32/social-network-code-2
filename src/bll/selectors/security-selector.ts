import { AppStateType } from './../store';


export const getSecurityCaptchaURLSelect = (state: AppStateType) => state.securityReducer.captchaURL
