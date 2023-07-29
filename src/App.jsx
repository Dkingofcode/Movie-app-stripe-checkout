import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomeScreen from './HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";


function App() {
  const auth = getAuth();
 // const user = null;
   const user = useSelector(selectUser); 
   const dispatch = useDispatch();


  useEffect(() => {
     onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
         );
      } else{
        // Logged out
        dispatch(logout);
      }
    });

    
  }, []);
   

  return (
    <>
   <div className="app">
    <BrowserRouter>
       {!user ? (
         <LoginScreen />
       ) : (
        <Routes>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
        <Route path="/*" element={<HomeScreen />} />
      </Routes>
       )}
      
    </BrowserRouter>
      </div>

    </>
  );
};

export default App;
