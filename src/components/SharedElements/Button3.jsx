import React from 'react'
import './Button3.css'
import '../BookTicket/BookTicket'
const Button3 = ({handelHomeClick}) => {
    return (
        <button class="button3" onClick={handelHomeClick}>
            <i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>
        </button>
    )
}

export default Button3