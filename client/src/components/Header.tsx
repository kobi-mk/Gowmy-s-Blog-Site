import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user info exists in localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            Gowmy's Blog Site
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/create-post" className="hover:text-gray-400">Create Post</Link></li>
            <li><Link to="/post-comments" className="hover:text-gray-400">Post Comments</Link></li>
            {user ? (
              <li className="relative">
                <button className="hover:text-gray-400">
                  {user.email} {/* Display user's email */}
                </button>
                <ul className="absolute right-0 mt-2 bg-white text-black p-2 rounded shadow-lg">
                  <li><Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
