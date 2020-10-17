import { ActionsAppType } from "../actions/app-actions"

type InitialStateType = typeof initialState
const initialState = {
    isInitialize: false as boolean
}

export const appReducer = (state = initialState, action: ActionsAppType): InitialStateType => {
    return state
}