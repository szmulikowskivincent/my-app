import React, { useState, useEffect } from "react";
import "../css/userProfile.css";
import myPhoto from "../assets/avatar1.png";

const defaultAvatar1 = "https://via.placeholder.com/40?text=A";
const defaultAvatar2 = "https://via.placeholder.com/40?text=B";
const defaultAvatar3 = "https://via.placeholder.com/40?text=C";
const defaultAvatar4 = "https://via.placeholder.com/40?text=D";
const defaultAvatar5 = "https://via.placeholder.com/40?text=E";
const defaultAvatar6 = "https://via.placeholder.com/40?text=F";
const defaultAvatar7 = "https://via.placeholder.com/40?text=G";
const defaultAvatar8 = "https://via.placeholder.com/40?text=H";
const defaultAvatar9 = "https://via.placeholder.com/40?text=I";
const defaultAvatar10 = "https://via.placeholder.com/40?text=J";
const defaultAvatar11 = "https://via.placeholder.com/40?text=K";
const defaultAvatar12 = "https://via.placeholder.com/40?text=L";

const UserProfile = ({ user }) => {
  const [posts, setPosts] = useState([
    { content: "Here is a cool video I found!", likes: 34 },
    {
      content:
        "Le développement web est devenu un pilier essentiel dans notre monde actuel...",
      likes: 78,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "😁 Moi" },
    { text: "Hi there!", sender: "👉 Contact" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [postComments, setPostComments] = useState(posts.map(() => []));
  const [newComment, setNewComment] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "Moi" }]);
      setNewMessage("");
    }
  };

  const handleAddComment = (postIndex) => {
    if (newComment.trim()) {
      const updatedComments = [...postComments];
      updatedComments[postIndex] = [...updatedComments[postIndex], newComment];
      setPostComments(updatedComments);
      setNewComment("");
    }
  };

  const [friends] = useState([
    { name: "Alice", avatar: defaultAvatar1, status: "online" },
    { name: "Bob", avatar: defaultAvatar2, status: "offline" },
    { name: "Charlie", avatar: defaultAvatar3, status: "online" },
    { name: "David", avatar: defaultAvatar4, status: "offline" },
    { name: "Eve", avatar: defaultAvatar5, status: "online" },
    { name: "Frank", avatar: defaultAvatar6, status: "offline" },
    { name: "Grace", avatar: defaultAvatar7, status: "online" },
    { name: "Hank", avatar: defaultAvatar8, status: "offline" },
    { name: "Ivy", avatar: defaultAvatar9, status: "online" },
    { name: "Jack", avatar: defaultAvatar10, status: "offline" },
    { name: "Karen", avatar: defaultAvatar11, status: "online" },
    { name: "Leo", avatar: defaultAvatar12, status: "offline" },
  ]);

  const getStatusClass = (status) => {
    return status === "online" ? "status-online" : "status-offline";
  };

  return (
    <div className="user-profile-page">
      <div className="info-of-the-day">
        <h2>Info du jour</h2>
        <iframe
          src="https://www.francetvinfo.fr/en-direct/tv.html"
          title="Live"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="friends-container">
        <h3>Amis</h3>
        <ul className="friends-list">
          {friends
            .filter((friend) =>
              friend.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((friend, index) => (
              <li key={index} className="friend-item">
                <img
                  src={friend.avatar}
                  alt={`${friend.name}'s avatar`}
                  className="friend-avatar"
                />
                <span
                  className={`friend-status ${getStatusClass(friend.status)}`}
                ></span>
                <p className="friend-name">{friend.name}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="user-profile-container">
        <div className="user-info">
          <img
            src={myPhoto}
            alt="My Profile"
            className="profile-photo"
            style={{ width: "130px" }}
          />
          <p>🟢 en ligne</p>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
        <div className="posts-container">
          <h3>Publications</h3>
          <ul className="posts-list">
            {posts.map((post, index) => (
              <li key={index} className="post-item">
                <p>{post.content}</p>

                {index === 0 && (
                  <div className="post-video">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/WDhz5h8BlsQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="post-likes">
                  <button className="like-button">👍 {post.likes}</button>
                </div>

                {index === 0 && (
                  <div className="post-comments" style={{ marginTop: "0.5cm" }}>
                    <textarea
                      placeholder="Add a comment..."
                      className="comment-input"
                      style={{ width: "540px" }}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <p />
                    <button
                      onClick={() => handleAddComment(index)}
                      className="comment-submit"
                    >
                      Submit
                    </button>
                  </div>
                )}

                <div className="comments-list">
                  {postComments[index].map((comment, commentIndex) => (
                    <p key={commentIndex} className="comment-item">
                      {comment}
                    </p>
                  ))}
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
                className={`message ${
                  msg.sender === "Moi" ? "user-message" : "contact-message"
                }`}
              >
                <p>
                  <strong>{msg.sender}:</strong> {msg.text}
                </p>
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
    </div>
  );
};

export default UserProfile;
