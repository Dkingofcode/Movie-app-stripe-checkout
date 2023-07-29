import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import HomeScreen from './HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";


function App() {
  const user = null;
   const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth);
      } else{
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);
   

  return (
    <>
   <div className="app">
    <BrowserRouter>
       {!user ? (
         <LoginScreen />
       ) : (
        <Routes>
        <Route path="/*" element={<HomeScreen />} />
      </Routes>
       )}
      
    </BrowserRouter>
      </div>

    </>
  );
};

export default App;
