import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PostCreation: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>(''); // Assuming you'll set a default or dynamic author ID

  const handlePostCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', {
        title,
        content,
        author, // Ensure you send the author field
      });
      console.log('Post created:', response.data);
      setTitle('');
      setContent('');
      setAuthor(''); // Reset author field if necessary
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }} // Initial position and opacity
      animate={{ opacity: 1, y: 0 }} // Final position and opacity
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Post</h2>
      <form onSubmit={handlePostCreate}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author ID:</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <motion.button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }} // Slight scale-up on hover
          whileTap={{ scale: 0.95 }} // Slight scale-down on tap/click
        >
          Create Post
        </motion.button>
      </form>
    </motion.div>
  );
};

export default PostCreation;
