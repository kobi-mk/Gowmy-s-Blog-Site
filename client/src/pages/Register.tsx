import React from 'react';
import UserRegistration from '../components/UserRegistration';

const Register: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
        <UserRegistration />
      </div>
    </div>
  );
};

export default Register;
