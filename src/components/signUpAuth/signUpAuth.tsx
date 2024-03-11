import {NavLink} from "react-router-dom";
import ImagePipe from "../UI/ImagePipe.tsx";
import { useState } from "react";
import Button from "../button/Button.tsx";

function SignUpAuth() {

    return (
        <div className="sign-in">
            <div className="sign-in__container container">
                <div className="sign-in__info">
                    <NavLink to={'/signup'} className="sign-in__backlink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#190636" strokeOpacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Вернуться назад</NavLink>
                    <h1 className={"sign-in__title"}>Регистрация</h1>
<<<<<<< HEAD
                    <p className="sign-in__text">Проверьте указанную почту{}<br/>
=======
                    <p className="sign-in__text">Проверьте указанную почту {``}  <br/>
>>>>>>> d8d77ab1b5e85c5158db5cf5ee678dce3f63f083
                        На неё должен придти шестизначный код.
                    </p>
                    <p className="sign-in__backlink">Не пришел код? Отправить повторно через 55 секунд</p>
                    <div>
                        <label htmlFor=""><input type="number" /></label>
                        <label htmlFor=""><input type="text" /></label>
                        <label htmlFor=""><input type="text" /></label>
                        <label htmlFor=""><input type="text" /></label>
                        <label htmlFor=""><input type="text" /></label>
                        <label htmlFor=""><input type="text" /></label>
                    </div>
                </div>
                <Button isBtn={true} className="button-type-2 sign-page-button"><NavLink to='/signupauth'>Зарегистрироваться</NavLink></Button>
                <ImagePipe />
            </div>
        </div>
    )
}

export default SignUpAuth