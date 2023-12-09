import * as React from "react";

interface SignFormBodyProps {
    children: React.ReactNode
}
function SignFormBody({children}: SignFormBodyProps) {
    return(
        <form action="">
            {children}
        </form>
    )
}

export default SignFormBody