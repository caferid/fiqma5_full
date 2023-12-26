import React, { useState } from 'react'
import "./Login.scss"
import singup from '../assets/img/dl.beatsnoop 1.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()


  const handleLogin=async()=>{
    const response=await axios.post('http://localhost:3000/login',{
      username:username,
      password:password,
    })

    console.log(response);

    localStorage.setItem("token",response.data)
    if(response.status==200){
      navigate("/")
    }

    
  }
  return (
    <div id='login'>
      <div className="container">
        <div className="imgbox">
          <img src={singup} alt="" />
        </div>
        <div className="singinbox">
          <div className="title">
            <h3>Log in to Exclusive</h3>
            <p>Enter your details below</p>
          </div>
          <div className="inputbox">
            <div className="enterEmail">
              <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='Email or Phone Number' />
            <div className="line"></div>
            </div>
            <div className="enterEmail">
              <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
            <div className="line"></div>

            </div>
          </div>
          <div className="buttonbox">
            <button type='submit' onClick={()=>handleLogin()}>
            Log In
            </button>
            <p>Forget Password?</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login