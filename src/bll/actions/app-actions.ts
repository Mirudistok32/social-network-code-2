import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { InferActionsTypes, AppStateType } from './../store';
import { getAuthMeThunk } from './auth-actions';


const actions = {
    setInitialize: () => ({ type: 'APP/AUTH/SET_INITIALIZE' } as const),
}
export type ActionsAppType = InferActionsTypes<typeof actions>
export const actionsApp = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsAppType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAppType>

export const initializeAppThunk = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            let authPromise = dispatch(getAuthMeThunk())

            Promise.all([authPromise])
                .then(() => {
                    dispatch(actions.setInitialize())
                })

        } catch (error) {
            console.log(error)
        }
    }
}