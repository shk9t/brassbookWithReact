import {AxiosResponse} from "axios"
import { AuthResponse } from "../models/response/AuthResponse"
import $api from "../http"

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
         return await $api.post<AuthResponse>('/v1/auth/login', {email, password})
    }

    static async registration(data): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/v1/auth/registration', {...data})
    }

    // static async logout(): Promise<void>{
    //     return $api.post<AuthResponse>('/logout')
    // }
}

