import { ActionsAuthType } from './../actions/auth-actions';

type InitialStateType = typeof initialState
const initialState = {
    isAutorization: false as boolean,
    id: null as null | string,
    email: null as null | string,
    login: null as null | string,
}

export const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
    return state
}