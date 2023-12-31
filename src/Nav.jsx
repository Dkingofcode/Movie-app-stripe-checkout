import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
const [show, handleShow] = useState(false);
const navigate = useNavigate();


const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }else{
        handleShow(false);
    }
};

   useEffect(() => {
     window.addEventListener('scroll', transitionNavBar);
     return () => {
        window.removeEventListener('scroll', transitionNavBar);
     }  
   }, []);

  return (
    <div className={`nav ${show &&  "nav__black"}`}>
        <div className='nav__contents'>
        <img className='nav__logo' src='https://pngimg.com/uploads/netflix/netflix_PNG17.png' alt='' />
        <img onClick={() => navigate("/profile")} className='nav__avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='' /> 
        </div>
      
    </div>
  );
};

export default Nav;
