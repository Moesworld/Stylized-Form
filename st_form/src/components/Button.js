import React from 'react'
import './Button.css'



function Button({text, onClick}) {


    return (
        <div>
            <div>
                <div className="btnContainer">
                        <button type="button" onClick={onClick}>{text}</button>
                </div>
            </div>
        </div>
    )
}

Button.defaultProps = {
    text : "Start"
}

export default Button
