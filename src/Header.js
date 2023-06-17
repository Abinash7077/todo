import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from './Authentication';
import {useSelector} from 'react-redux'




const Header = () => {
  const userData=useSelector((state)=>state.users)
 console.log(userData)
 console.log("user",userData.authentic)
 
  
  const logout=async()=>{
    await signOut(auth)
    
  }
  return (
    <div className='flex items-center justify-between w-[100%] px-10 bg-black'>
        <div className="">
            <h2><NavLink to="/">Icon</NavLink></h2>
        </div>
        <div className="">
            <ul className='flex items-center justify-between gap-16'>
              {
                !userData.authentic?<><li className='px-[18px] text-[16px] rounded-lg'><NavLink to="/Login">Login</NavLink></li>
                <li className='px-[18px] text-[16px] rounded-lg'><NavLink to="/SignUp">SignUp</NavLink></li></>:<><li className='px-[18px] text-[16px] rounded-lg'></li>
                <li className='px-[18px] text-[16px] rounded-lg' onClick={logout}>LogOut</li></>
              }
                
            </ul>
        </div>
      
    </div>
  );
}

export default Header;
