import React from "react";
import "../css/header.css";


const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/userProfile">userProfile</a>
      </nav>
    </header>
  );
};

export default Header;
