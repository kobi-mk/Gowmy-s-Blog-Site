import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  // Inside Login.tsx, the handleLogin function already stores the token and user info
const handleLogin = async (event: React.FormEvent) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

    // Store the token in localStorage
    localStorage.setItem('token', response.data.token);

    // Store the user information (e.g., email)
    localStorage.setItem('user', JSON.stringify({ email }));

    navigate('/'); // Redirect to home page after login
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Invalid credentials, please try again.');
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
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
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </form>
    </motion.div>
  );
};

export default Login;
