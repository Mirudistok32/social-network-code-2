import { UserType } from './../../api/users-api';
import { ActionsUsersType } from "../actions/users-actions"
import produce from 'immer';

type InitialStateType = typeof initialState
const initialState = {
    isFollow: false,
    users: [] as Array<UserType>,
    friends: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    totalFriendsCount: 0,
    isFetchings: [] as Array<number>,
}

export const usersReducer = (state = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case 'APP/FOLLOW/GET_FOLLOW_USER': {
            return { ...state, ...action.payload }
        }
        case 'APP/USERS/FOLLOW': {
            return produce(state, draft => {
                draft.users = draft.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            })
        }
        case 'APP/USERS/UNFOLLOW': {
            return produce(state, draft => {
                draft.users = draft.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            })
        }
        case 'APP/USERS/SET_USERS': {
            return { ...state, ...action.payload }
        }
        case 'APP/USERS/SET_FRIENDS': {
            return { ...state, ...action.payload }
        }
        case 'SN/USERS/SET_IS_FETCHINGS': {
            return {
                ...state, isFetchings: action.isFetging ?
                    [...state.isFetchings, action.id] :
                    state.isFetchings.filter(id => id !== action.id)
            }
        }
        default: { return state }
    }
}