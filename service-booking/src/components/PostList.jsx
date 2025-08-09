import React from "react";
import Post from "./Post";

export default function PostList({ posts, onLike, onAddComment }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={onLike}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
}
