import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Firebase';
import '../styles/SignUp.css';

const SignUp = () => {
  const navigate=useNavigate();
  const [values, setvalue] =useState({
      name:"",
      email:"",
      pass:"",

  });
  const[errorMsg,setErrormsg]=useState("");
  const[submitButtonDislabeled,setsubmitButtonDisabled]=useState();
  const handleSubmit=()=>{
   if(!values.name   || !values.email|| !values.pass){
    setErrormsg("Fill all Fields"); 
    return;
   }
   setErrormsg("")
   console.log(values);
   setsubmitButtonDisabled(true);
   createUserWithEmailAndPassword(auth,values.email,values.pass).then((res) => {
    setsubmitButtonDisabled(false);
    const user=res.user;
     updateProfile(user,{
      displayName:values.name,
    })
    console.log(res);
  }).catch((err)=>{
    setsubmitButtonDisabled(false);
    console.log(err)
  })
   navigate("/dashboard");
  }
  return (
    <div className='login-container'>
   <div className='image'>
   <div className='forms'>
      <h1>sign up</h1>
      <label>Name</label>
               <input type="email" placeholder="Enter Email"  onChange={(e)=>setvalue((prev)=>({...prev,name:e.target.value}))} />
               <br/><br/>
     <label>Email</label>
               <input type="email" placeholder="Enter Email"  onChange={(e)=>setvalue((prev)=>({...prev,email:e.target.value}))} />
               <br/><br/>
        <label>Password</label>
               <input type="password"  placeholder="Enter Password" onChange={(e)=>setvalue((prev)=>({...prev,pass:e.target.value}))} />
    <div >
      <p>{errorMsg}</p>
     <button onClick={handleSubmit} disabled={submitButtonDislabeled}>Login</button>
     <p>
       Already Have an account ?{" "}

      <span>
      <Link to="/login">Login</Link>
      </span>
     </p>
     </div>
     </div>
    </div>
</div>
  )
}

export default SignUp
