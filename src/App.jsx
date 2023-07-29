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
import HomeScreen from './HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';

function App() {
  const user = null;

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
