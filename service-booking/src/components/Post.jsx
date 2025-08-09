import React, { useState } from "react";

export default function Post({ post, onLike, onAddComment }) {
  const [commentText, setCommentText] = useState("");
  const [commentUsername, setCommentUsername] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentUsername.trim() || !commentText.trim()) return;
    onAddComment(post.id, commentUsername.trim(), commentText.trim());
    setCommentText("");
    setCommentUsername("");
  };

  return (
    <div className="post">
      <div className="post-header">@{post.username}</div>
      <img
        className="post-image"
        src={`${post.imageUrl}?w=600&auto=format`}
        alt={post.caption}
      />
      <div className="post-caption">{post.caption}</div>
      <button className="like-btn" onClick={() => onLike(post.id)}>
        ❤️ {post.likes} Likes
      </button>

      <div className="comments-section">
        <h4>Comments:</h4>
        {post.comments.length === 0 && <p>No comments yet.</p>}
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>
              <b>@{comment.username}</b>: {comment.text}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmitComment} className="comment-form">
          <input
            type="text"
            placeholder="Your username"
            value={commentUsername}
            onChange={(e) => setCommentUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
