import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex items-center justify-between w-[100%] px-10 bg-black'>
        <div className="">
            <h2><NavLink to="/">Icon</NavLink></h2>
        </div>
        <div className="">
            <ul className='flex items-center justify-between gap-16'>
                <li className='px-[18px] text-[16px] rounded-lg'><NavLink to="/Login">Login</NavLink></li>
                <li className='px-[18px] text-[16px] rounded-lg'><NavLink to="/SignUp">SignUp</NavLink></li>
            </ul>
        </div>
      
    </div>
  );
}

export default Header;
