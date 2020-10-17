import { securityReducer } from './reducers/security-reducer';
import { profileReducer } from './reducers/profile-reducer';
import { usersReducer } from './reducers/users-reducer';
import { appReducer } from './reducers/app-reducer';
import { authReducer } from './reducers/auth-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    authReducer,
    appReducer,
    usersReducer,
    profileReducer,
    securityReducer
})

export type AppStateType = ReturnType<typeof rootReducers>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store