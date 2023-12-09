import React, {useState} from "react";

interface SignFieldProps {
    id: string
    type: string
    name: string
    label?: string
    placeHolder?: string
}
function SignField({label, placeHolder, id, type}: SignFieldProps) {
    const [value, setValue] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeHolder}
                onChange={(event) => changeHandler(event)}
            />
        </>
    )
}

export default SignField