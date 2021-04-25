import React from 'react'
import './Btn.css'

const Button = ({className,value,onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={`custom_Button ${className}`} >{value}</button>
        </div>
    )
}

export default Button
