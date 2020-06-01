import React from "react";
import "../SignInPage/signIn.css"

function signIn(){
    return(
        <div className="signInButton">
                {/* Will we use jQuery to dynamically create functions? */}
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