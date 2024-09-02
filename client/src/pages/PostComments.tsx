import React from 'react';
import CommentPosting from '../components/CommentPosting';

const PostComments: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* <h1 className="text-3xl font-bold mb-8">Post a Comment</h1> */}
      <CommentPosting />
    </div>
  );
};

export default PostComments;
