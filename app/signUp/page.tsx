"use client"
import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';

function SignUp() {
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleClick =(e:any)=> {
    e.preventDefault()
    if(username == null && email == null && password == null){
      alert('Oops! Looks like you missed something')
    }
    else{
      axios.post('http://localhost:3000/user',{username,email,password})
      window.location.href="./login"
    }
    
  }

  return (
    <div className="bg-blue-200 h-screen">

 <div className="w-400 h-400 ml-32 mb-32">
  <img src="signUp.png" alt="" />
</div>

<div className="mt-8">

 <div className="mb-4">
  <label className="block text-black-700 text-sm font-bold"style={{marginTop:"-500px",marginLeft:"65rem"}} >User Name</label>
  <input  className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none " onChange={(e:any)=>setUsername(e.target.value)} type="text" style={{marginLeft:"65rem"}} />
</div>
<div>
<label className="block text-black-700 text-sm font-bold"style={{marginTop:"-7px",marginLeft:"65rem"}} >Mobile or Email</label>
  <input  className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none " onChange={(e:any)=>setEmail(e.target.value)} type="text" style={{marginLeft:"65rem"}} />
</div>
<div>
<label className="block text-black-700 text-sm font-bold"style={{marginTop:"10px",marginLeft:"65rem"}} >Password</label>
  <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none " onChange={(e:any)=>setPassword(e.target.value)} type="text" style={{marginLeft:"65rem"}} />
</div>
<div>
<label className="block text-black-650 text-sm font-bold"style={{marginTop:"10px",marginLeft:"65rem"}} >Date of Birth</label>
  <input className="w-450 px-4 py-3 border border-gray-100 rounded-md focus:outline-none " type="date" style={{marginLeft:"65rem"}} />
</div>


<button className="bg-red-600 mt-16 w-40 h-12 rounded-xl  hover:bg-yellow-600" onClick={handleClick} style={{marginLeft:"67rem",color:"white", boxShadow: "0 12px 15px rgba(0,0,0,0.3)"}}>Sign Up</button>


<Link href="/login">
<h1 style={{marginLeft:"65.5rem",marginTop:"20px",color:"black"}}>Already have an account?</h1>
</Link>
 </div>

</div>
  );
}

export default SignUp;
