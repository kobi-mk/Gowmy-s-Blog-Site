import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.3 // Stagger children by 0.3 seconds
    }
  }
};

// Animation variants for each child
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [key, setKey] = useState<number>(0); // State to force re-render

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => {
        setPosts(response.data);
        // Update the key to force re-render and trigger animation
        setKey(prevKey => prevKey + 1);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      key={key} // Use the unique key to force re-render
    >
      <h2 className="text-4xl font-bold text-center mt-4 mb-12">Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <motion.div 
            key={post._id} 
            className="bg-white p-6 mb-6 rounded-lg shadow-lg"
            variants={childVariants}
            whileHover={{ scale: 1.05 }} // Slightly increase the size on hover
            whileTap={{ scale: 0.95 }} // Slightly decrease the size on tap (click)
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <small className="text-gray-500">By {post.author?.name || 'Kovarthan Mahendram'}</small>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </motion.div>
  );
};

export default Posts;
