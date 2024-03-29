import React from 'react';
import {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';

function Login() { 
 
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const {firebase} = useContext(FirebaseContext)
 const navigate = useNavigate()


 const handleLogin=(e)=>{
   e.preventDefault()//to prevent refreshing
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     navigate('/')
   }).catch((error)=>{
     alert(error.message)
   })
 }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
