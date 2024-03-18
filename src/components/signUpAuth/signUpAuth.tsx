import {NavLink} from "react-router-dom";
import ImagePipe from "../UI/ImagePipe.tsx";
import { useState } from "react";
import Button from "../button/Button.tsx";
import classes from "./signupauth.module.css";

function SignUpAuth() {

    return (
        <div className="sign-in">
            <div className="sign-in__container container">
                <div className="sign-in__info">
                    <NavLink to={'/signup'} className="sign-in__backlink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#190636" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>Вернуться назад</NavLink>
                    <h1 className={"sign-in__title"}>Регистрация</h1>
                    <p className="sign-in__text">Проверьте указанную почту{}<br/>
                        На неё должен придти шестизначный код.
                    </p>
                    <p className="sign-in__backlink">Не пришел код? Отправить повторно через 55 секунд</p>
                    <div className={classes.div__input}>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                        <label htmlFor=""><input type="text" maxlength="1"/></label>
                    </div>
                </div>
                <Button isBtn={true} className="button-type-2 sign-page-button"><NavLink to='/signupauth'>Зарегистрироваться</NavLink></Button>
                <ImagePipe />
            </div>
        </div>
    )
}

export default SignUpAuth