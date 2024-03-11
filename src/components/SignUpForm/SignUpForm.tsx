import Button from "../button/Button.tsx";
import React, {useState} from "react";
import axios from "axios";
import classes from "./signupgrid.module.css";
import { NavLink } from "react-router-dom";

interface SignFormBodyProps {
    className?: string
}
function SignUpForm({className}: SignFormBodyProps) {

    const [INN, setINN] = useState('')
    const [INNDirty, setINNDirty] = useState(false)
    const [INNErr, setINNErr] = useState('')
    const [user, setUser] = useState(null);

    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch(e.target.name){
            case 'INN':
                setINNDirty(true)
                break
        }
    }

    const INNHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setINN(e.target.value)
        if(e.target.value.length != 10){
            setINNErr('В ИНН должно быть 10 цифр')
        }else{
            setINNErr('')
        }
    }

    function createKorpUser() {
        axios
          .post("localhost:8000/v1/auth/registration", {
            title: "Hello World!",
            body: "This is a new post."
          })
           .then((response) => {
            setUser(response.data);
           });
      }

    return(
        
        <form action="" className={"sign-form sign-in-form" + '' || className}>
            <div className={classes.ChangeAcc}>
                    <div className={classes.button__personalact}>Корпоративный аккаунт</div>
                    <div className={classes.button__personalacttt}>____________________________________</div>
            </div>
            <div className={classes.signform__fieldscontainer}>
                <div className={classes.div_main}>
                    <div className={classes.div_first}>
                        <div className={classes.signform__field}>
                            <label htmlFor="name">Имя</label>
                            <input name="name" id="name" placeholder="Введите имя" className={classes.sign__input1}></input>
                        </div>
                        <div className={classes.signform__field}>
                            <label htmlFor="SecondName">Фамилия</label>
                            <input name="SecondName" id="SecondName" placeholder="Введите фамилию" className={classes.sign__input2}></input>
                        </div>
                    </div>
                    <div className={classes.div_second}>
                        <div className={classes.signform__field}>
                            <label htmlFor="nameCompany">Название компании</label>
                            <input name="nameCompany" id="nameCompany" placeholder="Название компании, которую вы представляете" className={classes.sign__input3}></input>
                        </div>
                    </div>
                    <div className={classes.div_third}>
                        <div className={classes.signform__field}>
                            <label htmlFor="job">Должность</label>
                            <input name="job" id="job" placeholder="Ваша должность" className={classes.sign__input4}></input>
                        </div>
                        <div className={classes.signform__field}>
                            <label htmlFor="INN">ИНН</label>
                            <input onChange={e => INNHandler(e)} onBlur={e => blurHandler(e)} name="INN" id="INN" placeholder="Введите ИНН" className={classes.sign__input5}></input>
                            {(INNDirty && INNErr) && <div style={{color: 'red'}}>{INNErr}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-form__btn-container ">
                <Button isBtn={true} className="button-type-4 sign-page-button"><NavLink to='/signupauth'>Продолжить</NavLink></Button>
            </div>
        </form>
    )
}

export default SignUpForm