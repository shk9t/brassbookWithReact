import {NavLink} from "react-router-dom";
import './signPage.sass'
import SignForm from "../signForm/SignForm.tsx";
import Input from "../input/Input.tsx";

function SignPage() {
    return (
        <div className="sign-up">
            <div className="sign-up__container">
                <div className="sign-up__info">
                    <NavLink to={'/'} className="sign-up__backlink">Вернуться на главную</NavLink>
                    <h1 className={"sign-up__title"}></h1>
                    <p className="sign-up__text">Выберите тип регистрации и введите необходимые данные. <br/>
                        Вы уже зарегистрированны на сайте?
                        <NavLink to='/'>Войти</NavLink>
                    </p>
                </div>
                <SignForm children={<Input type={"email"} id={"email"} name={'email'} placeHolder={"Введите вашу почту"} className={"sign__input"} label={"Почта"} />} />
            </div>
        </div>
    )
}

export default SignPage