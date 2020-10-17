import { ActionsFollowType } from "../actions/follow-actions"

type InitialStateType = typeof initialState
const initialState = {
    isFollow: false as boolean,
    follow: false as boolean,
    unfollow: false as boolean
}

export const followReducer = (state = initialState, action: ActionsFollowType): InitialStateType => {
    switch (action.type) {
        case 'APP/FOLLOW/GET_FOLLOW_USER': {
            return { ...state, ...action.payload }
        }
        case 'APP/FOLLOW/FOLLOW': {
            return { ...state }
        }
        case 'APP/FOLLOW/UNFOLLOW': {
            return { ...state }
        }
        default: { return state }
    }
}