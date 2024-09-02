import React, { useState } from "react";
import "../css/login.css";
import reactLogo from "../assets/logo-React.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <img src={reactLogo} alt="React Logo" className="login-logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
