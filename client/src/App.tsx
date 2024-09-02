import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import PostComments from './pages/PostComments';
import About from './pages/About'; // Import the About component
import Login from './pages/Login';
import Profile from './pages/Profile'; // Import the Profile component
import Header from './components/Header'; // Import the updated Header component
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen"> {/* Set background color and minimum height */}
      <Router>
        <Header /> {/* Use the updated Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}> {/* Wrap protected routes */}
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post-comments" element={<PostComments />} />
            <Route path="/profile" element={<Profile />} /> {/* Profile route protected by PrivateRoute */}
          </Route>
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
