import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    username: "naturelover",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Beautiful mountain view!",
  },
  {
    id: 2,
    username: "foodie123",
    imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    caption: "Delicious pasta for dinner 🍝",
  },
  {
    id: 3,
    username: "travelbug",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    caption: "Exploring the city streets",
  },
];

export default function InstagramClone() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>My Instagram Feed</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ddd", marginBottom: 20, borderRadius: 8 }}>
          <div style={{ padding: "10px 15px", fontWeight: "bold" }}>@{post.username}</div>
          <img
            src={`${post.imageUrl}?w=600&auto=format`}
            alt={post.caption}
            style={{ width: "100%", borderBottom: "1px solid #ddd" }}
          />
          <div style={{ padding: "10px 15px" }}>{post.caption}</div>
        </div>
      ))}
    </div>
  );
}
