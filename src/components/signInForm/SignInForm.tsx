import "./signInForm.css";
import Button from "../button/Button.tsx";
import React, {useState} from "react";
import axios from "axios";

interface SignFormBodyProps {
    className?: string
}
function SignInForm({className}: SignFormBodyProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function usernameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername((event.target as HTMLInputElement).value);
    }
    function passwordChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword((event.target as HTMLInputElement).value);
    }
    async function onsubmitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const response = await axios.postForm('http://yarotrys.ru/login', {
                "login": username,
                "password": password
            });
            console.log(response.data);
        } catch (e) {

        }
    }
    return(
        <form action="" className={"sign-form sign-in-form" + '' || className} onSubmit={(event) => onsubmitHandler(event)}>
            <div className="sign-form__fields-container">
                <div className="sign-form__field">
                    <label htmlFor="email">Почта</label>
                    <input name="email" id="email" placeholder="Введите вашу почту" className="sign__input" type="email" onChange={(event) => usernameChangeHandler(event)}></input>
                </div>
                <div className="sign-form__field">
                    <label htmlFor="password">Пароль</label>
                    <input name="password" id="password" placeholder="Введите пароль" className="sign__input" type="password" onChange={(event) => passwordChangeHandler(event)}></input>
                </div>
            </div>
            <div className="sign-form__btn-container ">
                <Button isBtn={true} className="button-type-3 sign-page-button">Войти</Button>
            </div>
        </form>
    )
}

export default SignInForm