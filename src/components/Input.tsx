import React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('Input',event)
    // }
    return (
        <div>
            <input type="text" value={props.value} onChange={props.handleChange} />
            {/* <input type="text" value={props.value} onChange={handleInputChange} /> */}
        </div>
    )
}

export default Input
