import React from 'react'
import './Button2.css';
const Button2 = ({clickevent}) => {
    return (
        <div className="button2" onClick={clickevent}>
            <div className="box">B</div>
            <div className="box">O</div>
            <div className="box">O</div>
            <div className="box">K</div>
        </div>
    )
}

export default Button2