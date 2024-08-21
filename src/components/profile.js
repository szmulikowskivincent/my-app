import React from "react";
import "../css/profile.css";
import myPhoto from "../assets/avatar1.png"; 

const Profile = ({ user }) => {
  return (
    <div className="page-container">
      <div className="content-container">
      <img src={myPhoto} alt="My Profile" className="profile-photo" /> 
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
