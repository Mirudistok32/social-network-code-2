import Axios from "axios";


export const instance = Axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "d023b2c6-7676-43b1-bc4b-aaf1d4db4466",
    },
    withCredentials: true
})

export enum ResulteCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}