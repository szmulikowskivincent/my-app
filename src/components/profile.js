import React from "react";
import "../css/profile.css";
import "../css/FriendManager.css"
import myPhoto from "../assets/avatar1.png";
import FriendManager from "./FriendManager"; 

const Profile = ({ user }) => {
  return (
    <div className="page-container">
      <div className="content-container">
        <img src={myPhoto} alt="My Profile" className="profile-photo" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <FriendManager></FriendManager>
    </div>
  );
};

export default Profile;
