import { ResulteCodesEnum } from './../../api/base-config-api';
import { usersAPI, UserType } from './../../api/users-api';
import { ThunkAction } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { followAPI } from '../../api/follow-api';
import { InferActionsTypes, AppStateType } from '../store';


const actions = {
    getFollowCurrentUser: (isFollow: boolean) => ({ type: "APP/FOLLOW/GET_FOLLOW_USER", payload: { isFollow } } as const),
    follow: (userId: number) => ({ type: "APP/USERS/FOLLOW", payload: { userId } } as const),
    unfollow: (userId: number) => ({ type: "APP/USERS/UNFOLLOW", payload: { userId } } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'APP/USERS/SET_USERS', payload: { users } } as const),
    setFriends: (friends: Array<UserType>) => ({ type: 'APP/USERS/SET_FRIENDS', payload: { friends } } as const),
    setIsFetchings: (isFetging: boolean, id: number) => ({ type: 'SN/USERS/SET_IS_FETCHINGS', id, isFetging } as const),
}
export type ActionsUsersType = InferActionsTypes<typeof actions>
export const usersActions = actions


type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsUsersType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsUsersType>

export const getUsersThunk = (currentPage: number = 1, pageSize: number = 10, term: string = ''): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await usersAPI.getUsers(currentPage, pageSize, term)

            if (response.data.totalCount === ResulteCodesEnum.Success) {
                dispatch(actions.setUsers(response.data.items))
            }

            if (response.data.totalCount === ResulteCodesEnum.Error) {
                console.error(response.data.error)
            }

        } catch (error) {
            console.error(error)
        }
    }
}

export const getFriendsThunk = (currentPage: number = 1, pageSize: number = 10, term: string = '', friend: boolean = true): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await usersAPI.getFriend(currentPage, pageSize, term, friend)

            if (response.data.totalCount === ResulteCodesEnum.Success) {
                dispatch(actions.setFriends(response.data.items))
            }

            if (response.data.totalCount === ResulteCodesEnum.Error) {
                console.error(response.data.error)
            }

        } catch (error) {
            console.error(error)
        }
    }
}

export const getFollowCurrentUserThunk = (userId: number): ThunkType => {
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
            dispatch(actions.setIsFetchings(true, userId))
            const response = await followAPI.follow(userId)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.follow(userId))
                dispatch(actions.setIsFetchings(false, userId))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.log("Something went wrong (followThunk)")
                console.error(response.data.messages)
                dispatch(actions.setIsFetchings(false, userId))
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(actions.setIsFetchings(true, userId))
            const response = await followAPI.unfollow(userId)

            if (response.data.resultCode === ResulteCodesEnum.Success) {
                dispatch(actions.unfollow(userId))
                dispatch(actions.setIsFetchings(false, userId))
            }

            if (response.data.resultCode === ResulteCodesEnum.Error) {
                console.log("Something went wrong (unfollowThunk)")
                console.error(response.data.messages)
                dispatch(actions.setIsFetchings(false, userId))
            }
        } catch (error) {
            console.error(error)
        }
    }
}