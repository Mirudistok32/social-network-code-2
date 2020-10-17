import { ThunkDispatch, ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../store"

const actions = {
    setAutorization: (auth: boolean) => ({ type: 'APP/AUTH/SET_AUTHORIZATION', payload: { auth } } as const),
    setOwnerDataFromAuth: (id: string, email: string, login: string) => ({ type: 'APP/AUTH/SET_OWNER_DATA_FROM_AUTH', payload: { id, email, login } } as const)
}
export type ActionsAuthType = InferActionsTypes<typeof actions>
export const actionsAuth = actions

type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsAuthType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAuthType>

export const getAuthMeThunk = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {

        } catch (error) {

        }
    }
}