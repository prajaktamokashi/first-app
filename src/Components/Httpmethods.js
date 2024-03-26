import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Httpmethods() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({ title: '', body: '' });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleEditPost = async (id, updatedPost) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      if (response.ok) {
        const updatedPosts = posts.map((post) =>
          post.id === id ? { ...post, ...updatedPost } : post
        );
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.body}
            <button onClick={() => handleEditPost(post.id, { title: 'Updated Title', body: 'Updated Body' })}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Post</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newPost.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Body"
        value={newPost.body}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default Httpmethods;
