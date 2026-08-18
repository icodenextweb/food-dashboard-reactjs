import React from "react";

export default function Button({btnText, btnStyle}){
    return(
        <button className={`${btnStyle}`}>{btnText}</button>
    )
}