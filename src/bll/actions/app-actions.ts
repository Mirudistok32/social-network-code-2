import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { InferActionsTypes, AppStateType } from './../store';

const actions = {
    setInitialize: () => ({ type: 'APP/AUTH/SET_INITIALIZE' } as const),
}
export type ActionsAppType = InferActionsTypes<typeof actions>
export const actionsApp = actions

type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsAppType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAppType>
