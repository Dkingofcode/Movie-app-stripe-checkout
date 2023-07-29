import React, { useState } from 'react';
import SignupScreen from './SignupScreen';
import "./LoginScreen.css";


const LoginScreen = () => {
  const [signIn, setSignIn]  = useState(false);


  return (
    <div className="LoginScreen">
      <div className='LoginScreen__background'>
        <img className='LoginScreen__logo' src="https://pngimg.com/uploads/netflix/netflix_PNG17.png" alt="" />
        <button className='LoginScreen__button'>Sign In</button>

        <div className='LoginScreen__gradient' />


        <div className='LoginScreen__body'>
          {signIn ? (
            <SignupScreen />
          ) : ( 
            <>
             <h1>Unlimited films, TV programmes and more.</h1>
           <h2>Watch anywhere. Cancel at any time.</h2>
           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

           <div className='LoginScreen__input'>
             <form>
              <input type='email' placeholder="Email Address" />
                <button onClick={() => setSignIn(true)} className='LoginScreen__getStarted'>GET STARTED</button>
             </form>
           </div>
            </>
            )}
          </div>  
        </div>
    </div>
  );
};

export default LoginScreen;
