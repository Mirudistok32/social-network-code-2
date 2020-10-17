import { captchaAPI } from './../../api/security-api';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { InferActionsTypes, AppStateType } from './../store';

const actions = {
    setCaptch: (captchaURL: string) => ({ type: "APP/SECURITY/SET_CAPTCHA", payload: { captchaURL } } as const)
}
export type ActionsSecurityType = InferActionsTypes<typeof actions>
export const actionsSecurity = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsSecurityType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsSecurityType>

export const setCaptchThunk = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await captchaAPI.getCaptchaURL()
            dispatch(actions.setCaptch(response.data.url))
        } catch (error) {
            console.log("setCaptchThunk " + error)
        }
    }
}