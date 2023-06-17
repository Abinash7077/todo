import React,{useEffect, useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Authentication';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginRedux } from '../redux/userSlice';



const Login = () => {
  const dispatch=useDispatch()
  const[loginsuccess,setLoginSuccess]=useState(false)
  const navigate=useNavigate()
  const login=async(e)=>{
    e.preventDefault()
  try {
    const user=await signInWithEmailAndPassword(
      auth,logInEmail,loginPassword
    );
    console.log(user)
    if(user){
      alert("Login Successfully")
      navigate('/')
    
    }
  } catch (error) {
    console.log(error.message)
  }
  dispatch(loginRedux({
    authentic:loginsuccess,
      }))
      console.log(loginsuccess,"login")
      setLoginSuccess(true)
  }

  const[logInEmail,setLogInEmail]=useState("")
  const[loginPassword,setLogInPassword]=useState("")
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
<div className="shadow-lg px-4 py-4 rounded-lg bg-gray-700 md:w-[80%] lg:w-[30%] w-[90%] h-[40vh] border-2">
<h1>Login</h1>
        {/* Todo search start */}
        <div className="flex flex-col items-center w-full  h-[35px] border-2 my-4  rounded-lg">
          <input
            type="text"
            placeholder="Enter Email...."
            
            className="bg-gray-100 pl-4 text-black rounded-md text-[16px] h-full w-full"
            onChange={(e)=>setLogInEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
          <input
            type="text"
            placeholder="Enter Password...."
            className="bg-gray-100 pl-4 text-black rounded-md text-[16px] h-full w-full"
            onChange={(e)=>setLogInPassword(e.target.value)}
          />
          
        </div>
        
        <div className="flex items-center justify-end">
          {" "}
          <button className="bg-orange-400 text-[18px] px-[50px] py-[5px] rounded-lg text-white h-full shadow-xl " onClick={login}>
            Login
          </button>
        </div></div>      
    </div>
  );
}

export default Login;
