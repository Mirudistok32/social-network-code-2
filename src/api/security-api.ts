import { instance } from "./base-config-api";

type CaptchaResponseType = {
    url: string
}

export const captchaAPI = {
    getCaptchaURL: () => instance.get<CaptchaResponseType>(`/security/get-captcha-url`)
}