import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import '../styles/Login.css';
const Login = () => {
    
  const navigate=useNavigate();
  
  const [values, setvalue] =useState({
      email:"", 
      pass:"",

  });
  const[errorMsg,setErrormsg]=useState("");
  const[submitButtonDislabeled,setsubmitButtonDisabled]=useState();
  const handleSubmit=()=>{
   if( !values.email || !values.pass){
    setErrormsg("Fill all Fields"); 
    return;
   }
   setErrormsg(" ");
   console.log(values);
   setsubmitButtonDisabled(true);
   signInWithEmailAndPassword(auth,values.email,values.pass).then((res) => {
    setsubmitButtonDisabled(false);
    console.log(res);
  }).catch((err)=>{
    setsubmitButtonDisabled(false);
    console.log(err)
  })
   navigate("/dashboard")
  }
  return (
    <div className='login-container'>
      <div className='login'>
       
         <InputControl label="Email" placeholder="Enter Email "
         onChange={(e)=>setvalue((prev)=>({...prev,email:e.target.value}))}/>
         <InputControl label="Password" placeholder="Enter Password "
         onChange={(e)=>setvalue((prev)=>({...prev,pass:e.target.value}))}/>

         <div >
         <p>{errorMsg}</p>
     <button onClick={handleSubmit} disabled={submitButtonDislabeled}>Login</button>
          <p>
            Already Have an account ?{" "}

           <span>
           <Link to="/">Sign Up</Link>
           </span>
          </p>
         </div>
       </div>
    </div>
  )
}

export default Login

