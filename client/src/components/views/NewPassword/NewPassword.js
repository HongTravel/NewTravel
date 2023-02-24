import React from 'react';
import './NewPassword.css';

function movetoLogin(){
    window.location.href="/login";
}

function NewPassword(){
    return(
        <div className="main">
            <div className="change">
                <form>
                    <label aria-hidden>Change Password</label>
                    <input style={{marginLeft: "50px"}} type="email" name ="email" placeholder = "Enter your Email" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="password" name="new" placeholder ="Enter new Password" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="password" name = "confirm" placeholder = "Confirm your Password" />
                    <br />
                    <button style={{marginLeft: "50px"}} onClick={movetoLogin}>Change</button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword;
