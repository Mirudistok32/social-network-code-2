import { AuthMeType } from './../../api/auth-api';
import { ActionsAuthType } from './../actions/auth-actions';

type InitialStateType = typeof initialState
const initialState = {
    isAutorization: false as boolean,
    data: {} as AuthMeType
}

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {
        case 'APP/AUTH/SET_AUTHORIZATION': {
            return { ...state, ...action.payload }
        }
        case 'APP/AUTH/SET_OWNER_DATA_FROM_AUTH': {
            return { ...state, ...action.payload }
        }
        default: { return state }
    }

}