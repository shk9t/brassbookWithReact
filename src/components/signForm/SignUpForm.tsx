import {NavLink} from "react-router-dom";
import './SignUpForm.sass'
import SignFormBody from "../signFormBody/SignFormBody.tsx";
import SignField from "../signField/SignField.tsx";

function SignUpForm() {
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
                <SignFormBody children={ <SignField type={"email"}  name={'email'} id={"email"} placeHolder={"Введите вашу почту"}  label={"Почта"} />} />
            </div>
        </div>
    )
}

export default SignUpForm