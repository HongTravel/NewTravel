import React from 'react';
import './LoginPage.css';

function movetoMain()
{
    window.location.href="/";
}

function movetopassword()
{
    window.location.href="/newpass";
}

function LoginPage(){
    return(
        <div className ="main2">
            <div className = "login">
                <form>
                    <label aria-hidden="true">Login</label>
                    <input  style={{marginLeft:"50px"}}type="email" name = "email" placeholder = "Enter your Email" />
                    <br />
                    <input style={{marginLeft:"50px"}} type="password" name = "password" placeholder = "Enter your Password" />
                    <br />
                    <button style={{marginLeft:"50px"}} onClick={movetoMain}>Login</button>
                    <br />
                    <button style={{marginLeft: "50px"}} onClick={movetopassword}>Forgot password?</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;