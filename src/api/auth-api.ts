import { instance } from './base-config-api';


type AuthMeType = {
    id: string
    email: string
    login: string
}

type LoginInType = {
    userId: string
}

type CommonAuthResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const authAPI = {
    isAuthMe: () => instance.get<CommonAuthResponseType<AuthMeType>>('/auth/me'),
    loginIn: (email: string, password: string, rememberMe: boolean, captcha: boolean = false) => instance.post<CommonAuthResponseType<LoginInType>>('/auth/login', { email, password, rememberMe }),
    loginOut: () => instance.delete<CommonAuthResponseType>('/auth/login'),
}