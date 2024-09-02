import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { motion } from 'framer-motion';

const UserRegistration: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/users/register', {
      name,
      email,
      password,
    })
    .then(response => {
      console.log('User registered:', response.data);
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login'); // Redirect to the login page after successful registration
    })
    .catch(error => console.error('Error registering user:', error));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default UserRegistration;
