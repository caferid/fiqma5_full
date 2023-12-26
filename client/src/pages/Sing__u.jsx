import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Singup.scss"
import singup from '../assets/img/dl.beatsnoop 1.png'
import axios from "axios"

function Sing__u() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    console.log(password);
    const handleSignUp= async()=>{
       const response=await axios.post('http://localhost:3000/register',{
            username:username,
            password:password,
            role:"user"
        })

       if(response.status==201){
        navigate("/login")
       }
        
    }
    

    return (
        <div id='sing__'>
            <div className="container">
                <div className="imgbox">
                    <img src={singup} alt="" />
                </div>
                <div className="singinbox">
                    <div className="title">
                        <h3>Create an account</h3>
                        <p>Enter your details below</p>
                    </div>
                    <div className="inputbox">
                        <div className="enterEmail">
                            <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='name' />
                            <div className="line"></div>
                        </div>

                        {/* <div className="enterEmail">
                            <input type="text"  placeholder='Email or Phone Number' />
                            <div className="line"></div>
                        </div> */}
                        <div className="enterEmail">
                            <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="buttonbox">
                        <button type='submit' onClick={()=>handleSignUp()}>
                        Create Account
                        </button>
                        <div id='google'>
                        Sign up with Google
                        </div>
                        <div className="text">
                            <p>Already have account?</p>
                            <NavLink className='navlink' activeClassName='active'  to={'/login'}>login</NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sing__u