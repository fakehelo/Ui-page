import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import "./Loginpopup.css"

const Loginpop = ({setshowlogin}) => {
    const [currstate,setcurrstate] = useState("Login")
    return <>
    <div className="login-popup">
        <form className = "login-pop-conatiner">
            <div className="login-title">
                    <h2>{currstate}</h2>
                    <img onClick={()=>{setshowlogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            
            <div className="login-inputs">
                {currstate==="Login"?<></>:<input type="text"  placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your Email ID' required/>
                <input type="password" placeholder='Enter Password' required />
                <button>{currstate === "Sign Up"? "Create Account":"Login"}</button>

            </div>
            <div className="pop-check">
                <input type="checkbox" required />
                <p>By continuing I agree to Terms and conditions</p> 
            </div>
            <div className="pop-up-newaccount">
            {currstate === "Login"?<p>Create a new account? <span onClick={()=> setcurrstate("Sign Up")}>Click Here </span></p>
            :<p>Already Have a account. <span onClick = {()=> setcurrstate("Login")}> Login </span></p>}
            </div>
            
            
        </form>
    </div>
    </>
}

export default Loginpop;