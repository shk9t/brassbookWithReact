import Button from "../button/Button.tsx";
import React, {useState} from "react";
import axios from "axios";
import classes from "./signupgrid.module.css";

interface SignFormBodyProps {
    className?: string
}
function SignUpForm({className}: SignFormBodyProps) {
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
                "name": username,
                "SecondName": password
            });
            console.log(response.data);
        } catch (e) {

        }
    }
    return(
        <form action="" className={"sign-form sign-in-form" + '' || className} onSubmit={(event) => onsubmitHandler(event)}>

            <div className={classes.signform__fieldscontainer}>
                <div className={classes.div_main}>
                    <div className={classes.div_first}>
                        <div className={classes.signform__field}>
                            <label htmlFor="name">Имя</label>
                            <input name="name" id="name" placeholder="Введите имя" className={classes.sign__input1} onChange={(event) => usernameChangeHandler(event)}></input>
                        </div>
                        <div className={classes.signform__field}>
                            <label htmlFor="SecondName">Фамилия</label>
                            <input name="SecondName" id="SecondName" placeholder="Введите фамилию" className={classes.sign__input2} onChange={(event) => passwordChangeHandler(event)}></input>
                        </div>
                    </div>
                    <div className={classes.div_second}>
                        <div className={classes.signform__field}>
                            <label htmlFor="nameCompany">Название компании</label>
                            <input name="nameCompany" id="nameCompany" placeholder="Название компании, которую вы представляете" className={classes.sign__input3} onChange={(event) => passwordChangeHandler(event)}></input>
                        </div>
                    </div>
                    <div className={classes.div_third}>
                        <div className={classes.signform__field}>
                            <label htmlFor="job">Должность</label>
                            <input name="job" id="job" placeholder="Ваша должность" className={classes.sign__input4} onChange={(event) => passwordChangeHandler(event)}></input>
                        </div>
                        <div className={classes.signform__field}>
                            <label htmlFor="INN">ИНН</label>
                            <input name="INN" id="INN" placeholder="Введите ИНН" className={classes.sign__input5} onChange={(event) => passwordChangeHandler(event)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-form__btn-container ">
                <Button isBtn={true} className="button-type-2 sign-page-button">Продолжить</Button>
            </div>
        </form>
    )
}

export default SignUpForm