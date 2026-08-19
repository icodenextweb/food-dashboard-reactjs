import React from "react";

export default function Button({btnText, btnStyle,setBtnFn}){
    return(
        <button onClick={setBtnFn} className={`${btnStyle}`}>{btnText}</button>
    )
}