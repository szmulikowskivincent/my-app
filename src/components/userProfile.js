import React, { useState } from "react";
import "../css/userProfile.css";
import myPhoto from "../assets/avatar1.png"; 

const UserProfile = ({ user, posts }) => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "😁 Moi" },
    { text: "Hi there!", sender: "👉 Contact" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "Contact" }]); 
      setNewMessage("");
    }
  };

  return (
    <div className="user-profile-container">
      <div className="user-info">
          <img src={myPhoto} alt="My Profile" className="profile-photo" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>

      <div className="posts-container">
        <h3>Publications</h3>
        <ul className="posts-list">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <p>{post.content}</p>
              <div className="post-likes">
                <button className="like-button">👍 {post.likes}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-container">
        <div className="chat-header">
          <span>Chat</span>
          <button className="close-button">×</button>
        </div>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "User2" ? "user" : ""}`}
            >
              <p><strong>{msg.sender}:</strong> {msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

