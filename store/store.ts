import { makeAutoObservable } from "mobx";
import { IUser } from "../models/response/IUser";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../models/response/AuthResponse";
import axios from "axios";
import $api from "../http";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool;
    }

    setUser(user: IUser){
        this.user = user;
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.access_token)
            console.log('1211')
            console.log(response)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async registration(email: string, password: string){
        try{
            const response = await AuthService.registration(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.access_token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async CheckAuth() {
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.access_token)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e){
            console.log(e.response?.data?.message)
        }
    }
}