import * as React from "react";

interface SignFormBodyProps {
    children: React.ReactNode
}
function SignForm({children}: SignFormBodyProps) {
    return(
        <form action="">
            {children}
        </form>
    )
}

export default SignForm