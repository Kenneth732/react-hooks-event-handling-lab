// Code Keypad Component Here
import React from "react";


function Keypad (){
    function handlePawordChanged(){
        console.log("Enter a password.....")
    }
    return (
        <div>
            <input type="password" onChange={handlePawordChanged}/>
        </div>
    )
}

export default Keypad;