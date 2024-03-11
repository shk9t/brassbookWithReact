import {AxiosResponse} from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import $api from "../http"

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        // console.log(email)
         return await $api.post<AuthResponse>('/v1/auth/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/v1/auth/registration', {email, password})
    }

    // static async logout(): Promise<void>{
    //     return $api.post<AuthResponse>('/logout')
    // }
}

