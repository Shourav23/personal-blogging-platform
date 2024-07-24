import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `http://localhost:5000/api/comments/${postId}`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
