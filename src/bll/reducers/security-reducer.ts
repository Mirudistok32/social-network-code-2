import { ActionsSecurityType } from './../actions/security-actions';
type InitialStateType = typeof initialState
const initialState = {
    captchaURL: '' as string
}

export const securityReducer = (state = initialState, action: ActionsSecurityType): InitialStateType => {
    switch (action.type) {
        case 'APP/SECURITY/SET_CAPTCHA': {
            return { ...state, ...action.payload }
        }
        default: { return state }
    }
}