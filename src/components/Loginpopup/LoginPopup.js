import React, { useState } from 'react'
import "./loginpopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowlogin}) => {
    const [currentstate,setcurrentstate]=useState("Login")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentstate}</h2>
                    <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt='cross-icon'/>
                </div>
                <div className='login-popup-inputs'>
                    {
                        currentstate==="Login"?<></>:<input type='text' placeholder='Your name' required/>
                    }
                    <input type='email' placeholder='Your email' required/>
                    <input type='password' placeholder='password' required/>
                </div>
                <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentstate==="Login"
                    ?<p>Create a new account? <span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>
                    :<p>Already have an account? <span onClick={()=>setcurrentstate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup