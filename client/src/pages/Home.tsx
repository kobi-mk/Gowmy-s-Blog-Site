import React from 'react';
import Posts from '../components/Posts';
import { motion } from 'framer-motion';

// Define the animation variants for the page transition
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home: React.FC = () => {
  // Generate a unique key based on current time or other criteria
  const key = new Date().getTime(); 

  return (
    <motion.div
      className="flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      key={key} // Use the unique key to force re-render
    >
      {/* <h1 className="text-4xl font-bold text-center mb-8">Welcome to the MERN TypeScript App</h1> */}
      <Posts />
    </motion.div>
  );
};

export default Home;
