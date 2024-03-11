import {NavLink} from "react-router-dom";
import './signIn.css'
import SignInForm from "../signInForm/SignInForm.tsx";
import ImagePipe from "../UI/ImagePipe.tsx";

function SignIn() {
    return (
        <div className="sign-in">
            <div className="sign-in__container container">
                <div className="sign-in__info">
                    <NavLink to={'/'} className="sign-in__backlink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#190636" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>Вернуться на главную</NavLink>
                    <h1 className={"sign-in__title"}>Вход</h1>
                    <p className="sign-in__text">Выберите тип регистрации и введите необходимые данные. <br/>
                        Вы уже зарегистрированны на сайте? <NavLink to='/signup'>Зарегистрироваться</NavLink>
                    </p>
                    <div className="sign-in__forget-container">
                        <div className="sign-in__forget-title">Забыли пароль?</div>
                        <a href="" className="sign-in__forget-link">Восстановить</a>
                    </div>
                </div>
                <SignInForm />
                <ImagePipe />
            </div>
        </div>
    )
}

export default SignIn