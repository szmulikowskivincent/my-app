import React, { useState } from "react";
import Header from "../src/components/header";
import PostList from "../src/components/postlist";
import CreatePost from "../src/components/createpost";
import Profile from "../src/components/profile";
import Login from "../src/components/login";
import Post from "../src/components/post";

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
    content:
      "Vivre sa vie chaque jour comme si c'était la dérniére!",
    author: "Szmulikowski Vincent",
  };

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Profile user={user} />
          <CreatePost onCreate={handleCreatePost} />
          <Post post={samplePost} />
          <PostList posts={posts} />
        </>
      )}
    </div>
  );
}

export default App;
