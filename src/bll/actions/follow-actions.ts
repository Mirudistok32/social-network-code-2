import { ResulteCodesEnum } from './../../api/base-config-api';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { followAPI } from '../../api/follow-api';
import { InferActionsTypes, AppStateType } from './../store';


const actions = {
    getFollowCurrentUser: (isFollow: boolean) => ({ type: "APP/FOLLOW/GET_FOLLOW_USER", payload: { isFollow } } as const),
    follow: (userId: number) => ({ type: "APP/FOLLOW/FOLLOW", payload: { userId } } as const),
    unfollow: (userId: number) => ({ type: "APP/FOLLOW/UNFOLLOW", payload: { userId } } as const),
}
export type ActionsFollowType = InferActionsTypes<typeof actions>
export const followActions = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsFollowType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsFollowType>


export const getFollowCurrentUser = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await followAPI.isFollow(userId)
            dispatch(actions.getFollowCurrentUser(response.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const followThunk = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await followAPI.follow(userId)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.follow(userId))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.log("Something went wrong (followThunk)")
                console.error(response.data.messages)
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await followAPI.unfollow(userId)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.unfollow(userId))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.log("Something went wrong (unfollowThunk)")
                console.error(response.data.messages)
            }
        } catch (error) {
            console.error(error)
        }
    }
}