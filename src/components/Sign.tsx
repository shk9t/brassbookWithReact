import Header from "./header/Header.tsx";
import SignPage from "./signPage/SignPage.tsx";
interface SignUpProps{
    type: string
}
function Sign({}: SignUpProps) {
    return(
        <>
            <Header headerStyle={'header_paddint-34'} headerContainerStyle={'header__container_without-enter'} logoStyle={'header__logo_black'} linkStyle={'nav__link_black'}/>
            <SignPage />
        </>
    )
}

export default Sign