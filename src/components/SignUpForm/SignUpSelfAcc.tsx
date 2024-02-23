import React, {useState} from 'react';
import Button from '../button/Button';


const SignUpSelfAcc = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailErr, setEmailErr] = useState('емейл не может быть пустым')
    const [passwordErr, setpasswordlErr] = useState('пароль не может быть пустым')
    const [RepeatPassword, setRepeatPassword] = useState('')
    const [RepeatPasswordDirty, setRepeatPasswordDirty] = useState(false)
    const [repeatPasswordErr, setRepeatPasswordlErr] = useState('пароли должны совпадать')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailErr('Некорректный емейл')
        } else{
            setEmailErr('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 12){
            setpasswordlErr('пароль должен быть длиннее 3 и меньше 12 символов')
            if(!e.target.value.length){
                setpasswordlErr('Пароль не может быть пустым')
            }if(e.target.value != RepeatPassword){
                setRepeatPasswordlErr('пароли должны совпадать')
            }
        }else{
            setpasswordlErr('')
        }
    }

    const repeatPasswordHandler = (e) => {
        setRepeatPassword(e.target.value)
        if(e.target.value != password ){
            setRepeatPasswordlErr('пароли должны совпадать')
        }else{
            setRepeatPasswordlErr('')
        }
    }

    
    const blurHandler = (e) => {
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'RepeatPassword':
                setRepeatPasswordDirty(true)
                break
        }
    }

    return(
            <form action="" className={"sign-form sign-in-form" + '' }>
                <div className="sign-form__fields-container">
                    <div className="sign-form__field">
                        <label htmlFor="email">Почта</label>
                        {(emailDirty && emailErr) && <div style={{color: 'red'}}>{emailErr}</div>}
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" id="email" placeholder="Введите вашу почту" className="sign__input" type="email"></input>
                    </div>
                    <div className="sign-form__field">
                        <label htmlFor="password">Пароль</label>
                        {(passwordDirty && passwordErr) && <div style={{color: 'red'}}>{passwordErr}</div>}
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" id="password" placeholder="Введите пароль" className="sign__input" type="assword"></input>
                    </div>
                    <div className="sign-form__field">
                        <label htmlFor="RepeatPassword">Повторите Пароль</label>
                        {(RepeatPasswordDirty && repeatPasswordErr) && <div style={{color: 'red'}}>{repeatPasswordErr}</div>}
                        <input onChange={e => repeatPasswordHandler(e)} value={RepeatPassword} onBlur={e => blurHandler(e)} name="RepeatPassword" id="RepeatPassword" placeholder="Повторите пароль" className="sign__input" type="assword"></input>
                    </div>
                </div>
                <div className="sign-form__btn-container ">
                    <Button isBtn={true} className="button-type-3 sign-page-button">Войти</Button>
                </div>
            </form>
        )
};

export default SignUpSelfAcc;