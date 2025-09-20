import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const[currentState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
        <form  className='login-popup-container'>
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your Email'  required/>
            <input type="password" placeholder='Password' required />
            <button>{currentState==="sign up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By Continuing, I agree to the terms of use & privacy policy</p>

            </div>
            {currentState==="Login"?<p>Create a new account ?<span onClick={()=>setCurrentState("sign up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
            
            
          </div>
        </form>
    </div>
  )
}

export default LoginPopup
