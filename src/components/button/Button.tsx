import {NavLink} from "react-router-dom";
import "./buttonType1.sass";
import "./buttonType2.sass"
import {ReactNode} from "react";

interface ButtonProps{
    to: string;
    buttonText?: string;
    textAndBorderColor?: string;
    className?: string;
    isBtn?: boolean
    children?: ReactNode
}
function Button(buttonProps: ButtonProps) {

    return (
        !buttonProps.isBtn ? <NavLink to={buttonProps.to}
                 className={buttonProps.className || ''}
                 style={{color: buttonProps.textAndBorderColor, borderColor: buttonProps.textAndBorderColor}}
        >{buttonProps.buttonText || ''}{buttonProps.children}</NavLink> :
            <button
                     className={buttonProps.className || ''}
                     style={{color: buttonProps.textAndBorderColor, borderColor: buttonProps.textAndBorderColor}}
            >{buttonProps.buttonText || ''}</button>
    );
}

export default Button;