import React from "react";
import "../css/post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Posted by {post.author}</small>
    </div>
  );
};

export default Post;
