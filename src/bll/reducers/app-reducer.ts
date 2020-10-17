import { ActionsAppType } from "../actions/app-actions"

type InitialStateType = typeof initialState
const initialState = {
    isInitialize: false as boolean
}

export const appReducer = (state = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case "APP/AUTH/SET_INITIALIZE": {
            return { ...state, isInitialize: true }
        }
        default: { return state }
    }
}