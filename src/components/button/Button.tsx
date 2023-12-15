import {NavLink} from "react-router-dom";
import "./buttonType1.sass";
import "./buttonType2.sass"
import {ReactNode} from "react";


interface ButtonProps{
    to?: string;
    buttonText?: string;
    textAndBorderColor?: string;
    className?: string;
    isBtn?: boolean
    children?: ReactNode
    isSubmit?: boolean
}
function Button(buttonProps: ButtonProps) {

    return (
        !buttonProps.isBtn ? <NavLink to={buttonProps.to || '/'}
                 className={buttonProps.className || ''}
                 style={{color: buttonProps.textAndBorderColor, borderColor: buttonProps.textAndBorderColor}}
        >{buttonProps.buttonText || ''}{buttonProps.children}</NavLink> :
            <button
                 type='submit'
                 className={buttonProps.className || ''}
                 style={{color: buttonProps.textAndBorderColor, borderColor: buttonProps.textAndBorderColor}}
            >{buttonProps.children}</button>
    );
}

export default Button;