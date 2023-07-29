import React, { useRef } from 'react';
import { auth }  from "../firebase";
import "./SignupScreen.css";
//import { FirebaseApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = () => {
  const auth = getAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const register = (e) => {
    e.preventDefault();
  
  createUserWithEmailAndPassword(auth, emailRef, passwordRef).then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
   });
  }
   

   const signIn = (e) => {
      e.preventDefault();
   }



  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type='email'  />
        <input ref={passwordRef} placeholder='Password' type='password'  />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4> 
          <span className='signupScreen__gray'>New to Netflix?</span> 
         <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
