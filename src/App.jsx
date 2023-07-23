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



function App() {


  return (
    <>
      <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
  
      </Routes>
    </BrowserRouter>
      </div>

    </>
  );
};

export default App;
