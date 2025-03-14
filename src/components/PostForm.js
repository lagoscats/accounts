// PostForm.js (React Component)

import React, { useState } from 'react';
import axios from 'axios';
import './PostForm.css'; // Import the CSS file

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the Django backend
            const response = await axios.post('http://127.0.0.1:8000/api/posts/', {
                title: title,
                content: content,
            });

            console.log('Post created:', response.data);
            // Optionally, you can reset the form after successful submission
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default PostForm;
