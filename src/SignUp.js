import React, { useState } from 'react';
import { createUserWithEmailAndPassword,onAuthStateChanged, updateCurrentUser } from 'firebase/auth';

import { auth } from './Authentication';
import { current } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate()
  const[registerEmail,setRegisterEmail]=useState("")
const[password,setPassword]=useState("")
  const[user,setUser]=useState({})
  onAuthStateChanged(auth,(CurrentUser)=>{
    setUser(CurrentUser)
    
  })
  
const register=async()=>{
 try {
  
  const user=await createUserWithEmailAndPassword(auth,registerEmail,password)
 } catch (error) {
  console.log(error.message)
  
 }
 if(user){
  alert("Registered Successfully")
  navigate("/Login")
 }
}


  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
    <div className="shadow-lg px-4 py-4 rounded-lg bg-gray-700 md:w-[80%] lg:w-[30%] w-[90%] h-[40vh] border-2">
    <h1>SignUp</h1>
            {/* Todo search start */}
            <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
              <input
                type="text"
                placeholder="Enter Email...."
                className="bg-gray-100 pl-4 rounded-md text-[16px] text-black h-full w-full"
               value={registerEmail}
                onChange={(e)=>setRegisterEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
              <input
                type="text"
                placeholder="Enter Password...."
                className="bg-gray-100 pl-4 rounded-md text-[16px] text-black h-full w-full"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              
             
            </div>
            
            <div className="flex items-center justify-end">
              {" "}
              <button className="bg-orange-400 text-[18px] px-[50px] py-[5px] rounded-lg text-white h-full shadow-xl "onClick={register}>
                SignUp
              </button>
            </div></div>      
        </div>
  );
}

export default SignUp;
