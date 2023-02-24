import React from 'react';
import './RegisterPage.css';

function movetoLogin()
{
    window.location.href="/login";
}

function RegisterPage() {
    return(
        <div className = "main">
            <div className = "signup">
                <form>
                    <label aria-hidden="true">Sign Up</label>
                    <input style={{marginLeft: "50px"}} type="text" name="name" placeholder="Enter your Name" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="email" name="email" placeholder= "Enter your Email" />
                    <br />
                    <input style={{marginLeft: "50px"}} type="password" name="password" placeholder="Enter your Password" />
                    <br />
                    <button style={{marginLeft:"50px"}} onClick={movetoLogin}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;