import React from 'react';

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more user details here */}
    </div>
  );
};

export default Profile;
