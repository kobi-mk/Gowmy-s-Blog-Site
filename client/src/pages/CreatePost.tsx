import React from 'react';
import PostCreation from '../components/PostCreation';

const CreatePost: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* <h1 className="text-3xl font-bold mb-8">Create Post</h1> */}
      <PostCreation />
    </div>
  );
};

export default CreatePost;
