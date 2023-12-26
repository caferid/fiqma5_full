import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import  lopa from "../../assets/img/icons/lupa.png"
import  whislist from "../../assets/img/icons/Wishlist.png"
import basket from "../../assets/img/icons/sebetim.png"
function Navbar() {
    const [user,setUser]=useState(localStorage.getItem("token"))


    
    const handleLogout=()=>{
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <>
            <div className='Main_container'>
                <div className='header_and_navbar'>
                    <h1>Exclusive</h1>
                    <div className='navbar'>
                        <NavLink className='navlink' activeClassName='active'  to={'/'}>Home</NavLink>
                        <NavLink className='navlink'  to={'/about'}>About</NavLink>
                       {user ?  <NavLink className='navlink' onClick={()=>handleLogout()} to={'/login'}>Log out</NavLink> :  <><NavLink className='navlink'  to={'/login'}>Log in</NavLink><NavLink className='navlink'  to={'/singup'}>Sing up</NavLink></>} 
                        
                    </div>
                </div>
                <div className="search_and_icon">
                    <div className="search">
                        <div className="box">
                            <input type="text" placeholder="Search for products, brands and more" />
                            <div className="lopa">
                                <img src={lopa} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='icon'>
                        <img src={whislist} alt="" />
                        <img src={basket} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar