import React from "react";
import "../SignInPage/signIn.css"

function signIn(){
    return(
        <div className="signInButton">
                <label>
                    Email Address
                </label>
                <input>
                    Password
                </input>
        </div>
    )
}

export default signIn;