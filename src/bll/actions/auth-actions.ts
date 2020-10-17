import { setCaptchThunk } from './security-actions';
import { ResulteCodesEnum, ResultCodeForCapcthaEnum } from './../../api/base-config-api';
import { ThunkDispatch, ThunkAction } from "redux-thunk"
import { authAPI } from "../../api/auth-api"
import { AppStateType, InferActionsTypes } from "../store"


const actions = {
    setAutorization: (auth: boolean) => ({ type: 'APP/AUTH/SET_AUTHORIZATION', payload: { auth } } as const),
    setOwnerDataFromAuth: (id: string, email: string, login: string) => ({ type: 'APP/AUTH/SET_OWNER_DATA_FROM_AUTH', payload: { id, email, login } } as const),
}
export type ActionsAuthType = InferActionsTypes<typeof actions>
export const actionsAuth = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsAuthType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAuthType>

export const getAuthMeThunk = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await authAPI.isAuthMe()

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                const { id, email, login } = response.data.data
                dispatch(actions.setOwnerDataFromAuth(id, email, login))
                dispatch(actions.setAutorization(true))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error(response.data.messages)
            }

        } catch (error) {
            console.log("getAuthMeThunk " + error)
        }
    }
}

export const loginInThunk = (email: string, password: string, rememberMe: boolean, captcha: null | string = null): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await authAPI.loginIn(email, password, rememberMe, captcha)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(getAuthMeThunk())
            }

            if (response.data.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired) {
                dispatch(setCaptchThunk())
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error(response.data.messages)
            }

        } catch (error) {
            console.log("loginInThunk " + error)
        }
    }
}

export const loginOutThunk = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await authAPI.loginOut()

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.setAutorization(false))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.error(response.data.messages)
            }

        } catch (error) {
            console.log("loginOutThunk " + error)
        }
    }
}