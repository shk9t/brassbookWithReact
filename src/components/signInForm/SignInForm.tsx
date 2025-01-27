import "./signInForm.css";
import Button from "../button/Button.tsx";
import React, {useState, FC, useContext} from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../main.tsx";

const SignInForm: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const handleClick = (e: any) => {
        e.preventDefault()
        store.login(email, password)
        navigate('/user')
    }

    return (
        <form action="" className={"sign-form sign-in-form" + ''}>
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
                <Button onClick={handleClick}  isBtn={true} className="button-type-2 sign-page-button">Войти</Button>
            </div>
        </form>
    );
};

export default SignInForm;