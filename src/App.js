import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PostList from "./components/postlist";
import CreatePost from "./components/createpost";
import Profile from "./components/profile";
import Login from "./components/login";
import Post from "./components/post";
import UserProfile from "./components/userProfile";
import WeatherSimulator from "./components/WeatherSimulator.js";

import "./css/userProfile.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const handleCreatePost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleLogin = (username) => {
    setUser({ name: username, bio: "This is my bio" });
  };

  const samplePost = {
    title: "Ma devise",
    content: "Vivre sa vie chaque jour comme si c'était la dernière!",
    author: "Szmulikowski Vincent",
    likes: 10,
  };

  const userData = {
    name: "Vincent",
    bio: "Développeur web passionné.",
    avatarUrl: "src/assets/avatar1.png",
  };

  const postsData = [
    {
      title: "Premier post!",
      content: "Ceci est le premier post.",
      author: "Auteur 1",
      likes: 10,
    },
    {
      title: "Un autre post!",
      content: "Ceci est un autre post.",
      author: "Auteur 2",
      likes: 5,
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <WeatherSimulator />
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <>
                  <Profile user={user} />
                  <CreatePost onCreate={handleCreatePost} />
                  <Post post={samplePost} />
                  <PostList posts={posts} />
                </>
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/userProfile"
            element={<UserProfile user={userData} posts={postsData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
