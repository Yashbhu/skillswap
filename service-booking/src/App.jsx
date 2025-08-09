import React, { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import NewPostForm from "./components/NewPostForm";

const initialPosts = [
  {
    id: 1,
    username: "naturelover",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Beautiful mountain view!",
    likes: 10,
    comments: [
      { id: 1, username: "user1", text: "Wow, amazing!" },
      { id: 2, username: "user2", text: "I want to go there!" },
    ],
  },
  {
    id: 2,
    username: "foodie123",
    imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    caption: "Delicious pasta for dinner 🍝",
    likes: 5,
    comments: [],
  },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  // Add like to post by id
  const handleLike = (postId) => {
    setPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Add comment to post by id
  const handleAddComment = (postId, username, text) => {
    setPosts((posts) =>
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), username, text },
              ],
            }
          : post
      )
    );
  };

  // Add new post
  const handleAddPost = (username, imageUrl, caption) => {
    const newPost = {
      id: Date.now(),
      username,
      imageUrl,
      caption,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app-container">
      <Header />
      <NewPostForm onAddPost={handleAddPost} />
      <PostList
        posts={posts}
        onLike={handleLike}
        onAddComment={handleAddComment}
      />
    </div>
  );
}
