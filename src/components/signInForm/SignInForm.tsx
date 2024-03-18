import "./signInForm.css";
import Button from "../button/Button.tsx";
import React, {useState, FC, useContext} from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../main.tsx";
import AuthService from "../../../services/AuthService.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const SignInForm: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const handleClick = async (e) => {
        e.preventDefault()
        const response = await AuthService.login(email, password)
        if (response.data?.error) {
            setError(response.data.error)
        } else {
            navigate('/user')
        }
    }

    return (
        <form action="" className={"sign-form sign-in-form" + ''}>
            {error && <div>{error}</div>}
            <div className="sign-form__fields-container">
                <div className="sign-form__field">
                    <label htmlFor="email">Почта</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" placeholder="Введите вашу почту" className="sign__input" type="email"></input>
                </div>
                <div className="sign-form__field">
                    <label htmlFor="password">Пароль</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder="Введите пароль" className="sign__input" type="password"></input>
                </div>
            </div>
            <div className="sign-form__btn-container ">
                <Button onClick={e => handleClick(e)}  isBtn={true} className="button-type-2 sign-page-button">Войти</Button>
            </div>
        </form>
    );
};

export default SignInForm;