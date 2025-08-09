import React, { useState } from "react";

export default function NewPostForm({ onAddPost }) {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !imageUrl.trim()) return;
    onAddPost(username.trim(), imageUrl.trim(), caption.trim());
    setUsername("");
    setImageUrl("");
    setCaption("");
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}
