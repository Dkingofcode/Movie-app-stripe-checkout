import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import PlanScreen from "./PlanScreen";



function ProfileScreen() {
const user = useSelector(selectUser);

   return(
      <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
          <div className="profileScreen__details">
           <h2>{user.email}</h2>
           <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button onClick={() => signOut()} className="profileScreen__signOut">Sign Out</button>
           </div>
          </div>
        </div>
        </div>
      </div>
   );
}

export default ProfileScreen;