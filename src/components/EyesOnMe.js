// Code EyesOnMe Component Here
import React from "react";


export default function EyesOnMe(){
    function focus(){
        console.log("Good")
    }
    function Blur(){
        console.log("Hey! Eyes on me")
    }
    return(
        <React.Fragment>
            <button onFocus={focus} onBlur={blur}>
                Eyes on me
            </button>
        </React.Fragment>
    )
}