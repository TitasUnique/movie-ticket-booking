import React from 'react'
import './Button1.css';
const Button1 = ({handelClick}) => {
    return (
        <button className='button1' onClick={handelClick}>
            <span className="span-mother">
                <span>B</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
            </span>
            <span className="span-mother2">
                <span>B</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
            </span>
        </button>
    )
}

export default Button1