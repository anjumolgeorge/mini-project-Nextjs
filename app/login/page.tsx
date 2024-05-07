"use client";
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';


function Login() {
  const [userlog,setUserlog] = useState()
  const [logpassword,setLogpassword] = useState()

  const handleClick = (e:any) => {
    e.preventDefault()
    axios.get('http://localhost:3000/user')
    .then((res:any)=>{
      res.data.map((x:any)=>{
        if(userlog===x.username&&logpassword===x.password){
          window.location.href='./home'
          localStorage.setItem('username',x.username)
        }
      })
    })
    
  }
  return (
    <div className='white' style={{ height: "729px" }}>
      <img style={{ marginLeft: "30px", width: "40rem" }} src="login.png" alt="" />
      <div className='bg-gray-400' style={{ width: "35rem", marginLeft: "54rem", marginTop: "-302px", height: "30rem", borderRadius: "5rem",boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }}>

        <div>
          <label className="block text-black-700 text-sm font-bold ml-40 mt-6" >User name</label>
          <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e:any)=>setUserlog(e.target.value)} type="text" style={{marginLeft: "9rem", marginTop: "0.5rem",boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }} />
        </div>

        <div>
        <label className="block text-black-700 text-sm font-bold ml-40 mt-14">Password</label>
          <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none" onChange={(e:any)=>setLogpassword(e.target.value)} type="text" style={{ marginLeft: "9rem", marginTop: "0.5rem",boxShadow: "0 12px 15px rgba(0,0,0,0.3)" }} />
      </div>

        <button onClick={handleClick} className="ml-48 mt-20 w-40 h-12 rounded-full  hover:text-white" style={{background:"#476268",boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Login</button>

      </div>
      <Link href="/reset">
      <p style={{marginLeft:"66rem",marginTop:"-125px",color:"#476268"}}>Forgotten Password?</p>

      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" className='mt-[-9.6rem]' viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,250.7C672,288,768,288,864,288C960,288,1056,288,1152,256C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div> )}

export default Login;
