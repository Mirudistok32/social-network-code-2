import { AppStateType } from './../store';


export const getUsersIsFollowSelect = (state: AppStateType) => state.usersReducer.isFollow
export const getUsersDataSelect = (state: AppStateType) => state.usersReducer.users
export const getUsersFriendsSelect = (state: AppStateType) => state.usersReducer.friends
export const getUsersCurrentPageSelect = (state: AppStateType) => state.usersReducer.currentPage
export const getUsersPageSizeSelect = (state: AppStateType) => state.usersReducer.pageSize
export const getUsersTotalUsersCountSelect = (state: AppStateType) => state.usersReducer.totalUsersCount
export const getUsersTotalFriendsCountSelect = (state: AppStateType) => state.usersReducer.totalFriendsCount
export const getUsersTotalIsFetchingSelect = (state: AppStateType) => state.usersReducer.isFetchings
