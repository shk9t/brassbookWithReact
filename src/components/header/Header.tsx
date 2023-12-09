import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <header className={"header hero__header" + (window.location.pathname === '/signup' ? ' header_sign' : '')}>
            <div className={"header__logo" + (window.location.pathname === '/signup' ? ' header__logo_black' : '')}><NavLink to="/">
                BrassBook
            </NavLink></div>
            <nav className="header__nav nav">
                <ul className="nav__body">
                    <li><a href="#" className={"nav__link" + (window.location.pathname === '/signup' ? ' nav__link_black' : '')}>О проекте</a></li>
                    <li><a href="#" className={"nav__link" + (window.location.pathname === '/signup' ? ' nav__link_black' : '')}>Произведения</a></li>
                    <li><a href="#" className={"nav__link" + (window.location.pathname === '/signup' ? ' nav__link_black' : '')}>Команда</a></li>
                    <li><a href="#" className={"nav__link" + (window.location.pathname === '/signup' ? ' nav__link_black' : '')}>Публикации</a></li>
                    <li><a href="#" className={"nav__link" + (window.location.pathname === '/signup' ? ' nav__link_black' : '')}>Библиотека</a></li>
                </ul>
            </nav>
            {window.location.pathname === '/' && <div className="header__btns sign-buttons">
                <a href="" className="sign-buttons_in-btn other-button">Войти</a>
                <NavLink to={"/signup"} className="other-button sign-buttons_out-btn">Зарегестрироваться</NavLink>
                <div className="header__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>}
        </header>
    )
}

export default Header