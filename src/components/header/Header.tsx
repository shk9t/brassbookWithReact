import {NavLink} from 'react-router-dom'
import Button from "../button/Button.tsx";
interface HeaderProps{
    logoStyle?: string
    linkStyle?: string
    headerContainerStyle?: string
    headerStyle?: string
}
function Header({headerStyle, headerContainerStyle, logoStyle, linkStyle}: HeaderProps) {
    return (
        <header className={"header " + (headerStyle || '')}>
            <div className={"header__container " + (headerContainerStyle || '')}>
                <div className={"header__logo " + (logoStyle || '')}><NavLink to="/">
                    BrassBook
                </NavLink></div>
                <nav className="header__nav nav">
                    <ul className="nav__body">
                        <li><a href="#" className={"nav__link " + (linkStyle || '')}>О проекте</a></li>
                        <li><a href="#" className={"nav__link " + (linkStyle || '')}>Произведения</a></li>
                        <li><a href="#" className={"nav__link " + (linkStyle || '')}>Команда</a></li>
                        <li><a href="#" className={"nav__link " + (linkStyle || '')}>Публикации</a></li>
                        <li><a href="#" className={"nav__link " + (linkStyle || '')}>Библиотека</a></li>
                    </ul>
                </nav>
                {window.location.pathname === '/' && <div className="header__btns">
                    <Button to={'/signup'} buttonText={"Войти"} className={'button-type-1 button-type-1_in-btn'}/>
                    <Button to={'/signup'} buttonText={"Зарегистрироваться"} className={'button-type-1 button-type-1_up-btn'}/>
                    <div className="header__burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>}
            </div>
        </header>
    )
}

export default Header